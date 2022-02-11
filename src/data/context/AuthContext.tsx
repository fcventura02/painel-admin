import Router from "next/router";
import { createContext, useState } from "react";
import firebase from "../../firebase/config";
import IUser from "../../model/user";

interface IAuthContext {
  user?: IUser;
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

export function AuthProvider(props) {
  const [user, setUser] = useState<IUser>(null);


  async function loginGoogle() {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    console.log(resp);
    if (resp.user?.email) {
      const getUser = await userNormalizer(resp.user);
      setUser(getUser);
      Router.push("/");
    }
  }
  return (
    <AuthContex.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContex.Provider>
  );
}

export default AuthContex;
