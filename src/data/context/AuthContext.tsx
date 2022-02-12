import Router from "next/router";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import firebase from "../../firebase/config";
import IUser from "../../model/user";

interface IAuthContext {
  user?: IUser;
  loading?: boolean;
  logout?: () => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  loginGithub?: () => Promise<void>;
  registerEmailAndPassword?: (email: string, password: string) => Promise<void>;
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
    if (userFirebase?.email) {
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

  async function login(email, password) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      await configSection(resp.user);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function registerEmailAndPassword(email, password) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await configSection(resp.user);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configSection(resp.user);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function loginGithub() {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider());
      await configSection(resp.user);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSection(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-auth")) {
      const cancelar = firebase.auth().onAuthStateChanged(configSection);
      return () => cancelar();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContex.Provider
      value={{
        user,
        loading,
        logout,
        login,
        loginGoogle,
        loginGithub,
        registerEmailAndPassword,
      }}
    >
      {props.children}
    </AuthContex.Provider>
  );
}

export default AuthContex;
