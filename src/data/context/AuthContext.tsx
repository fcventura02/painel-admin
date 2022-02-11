import Router from "next/router";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import firebase from "../../firebase/config";
import IUser from "../../model/user";

interface IAuthContext {
  user?: IUser;
  loading?: boolean;
  loginGoogle?: () => Promise<void>;
  loginGithub?: () => Promise<void>;
}

const AuthContex = createContext<IAuthContext>({});

async function userNormalizer(userFirebase: firebase.User): Promise<IUser> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL,
  };
}

function manageCookie(loged: boolean) {
  console.log(loged);
  if (loged) {
    Cookies.set("admin-template-auth", loged, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

export function AuthProvider(props) {
  const [user, setUser] = useState<IUser>(null);
  const [loading, setLoading] = useState(true);

  async function configSection(userFirebase) {
    console.log(userFirebase);
    if (userFirebase.email) {
      const userData = await userNormalizer(userFirebase);
      setUser(userData);
      manageCookie(true);
      setLoading(false);
      return userData.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function loginGoogle() {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    console.log(resp);
    if (resp.user?.email) {
      const resUser = await userNormalizer(resp.user);
      setUser(resUser);
      configSection(resp.user);
      Router.push("/");
    }
  }

  useEffect(() => {
    const cancelar = firebase.auth().onAuthStateChanged(configSection);
    return () => cancelar();
  }, []);

  return (
    <AuthContex.Provider
      value={{
        user,
        loading,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContex.Provider>
  );
}

export default AuthContex;
