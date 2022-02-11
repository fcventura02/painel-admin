import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconGithub, IconGoogle, IconWarning } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Authenticate() {
  const {user, loginGoogle} = useAuth()
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function openError(msg, time = 5) {
    setError(msg);
    setTimeout(() => setError(null), time * 1000);
  }

  function submitForm() {
    if (mode === "login") console.log("Logar");
    else console.log("cadastrar");
    openError("Email ou senha não coincidem");
  }

  return (
    <div
      className={`
        flex h-screen items-center justify-center
    `}
    >
      <div
        className={`
         hidden md:block md:w-1/2 lg:w-2/3 
        `}
      >
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de login"
          className={`
                h-screen w-full object-cover
            `}
        />
      </div>
      <div
        className={`
         md:w-1/2 lg:w-1/3 w-full m-10
    `}
      >
        <h1
          className={`
        text-3xl font-bold mb-5
      `}
        >
          {mode === "login"
            ? "Entre com sua conta"
            : "Cadastre-se na plataforma"}
        </h1>

        {error ? (
          <div
            className={`
            flex items-center 
            bg-red-400 text-white 
            px-5 py-3 my-2 rounded-lg border border-red-700`}
          >
            <IconWarning />
            <span className={`ml-3`}>{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          id="email"
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
        />
        <AuthInput
          id="senha"
          type="password"
          label="Senha"
          value={password}
          setValue={setPassword}
        />
        <button
          onClick={submitForm}
          title="Entrar com Email e senha"
          className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `}
        >
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr
          className={`
            my-6 border-gray-300 w-full
      `}
        />

        <button
          onClick={loginGoogle}
          title="Entrar com Google"
          className={`
                w-full bg-gray-300 hover:bg-gray-200
                flex justify-center
                rounded-lg px-4 py-3
            `}
        >
          <IconGoogle />
        </button>
        <button
          onClick={submitForm}
          title="Entrar com Github"
          className={`
                w-full bg-gray-300 hover:bg-gray-200
                flex justify-center
                rounded-lg px-4 py-3 mt-3
            `}
        >
          <IconGithub />
        </button>
        {mode === "login" ? (
          <p className={`mt-8`}>
            Novo por aqui?
            <a
              onClick={() => setMode("register")}
              className={`
                text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}
            >
              {" "}
              Crie uma conta gratuitamente{" "}
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Já possuí conta?
            <a
              onClick={() => setMode("login")}
              className={`
                text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}
            >
              {" "}
              Entre com suas Credenciais{" "}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
