import { createContext, useState } from "react";

type Tema = "dark" | "";

interface IAppContext {
  tema?: Tema;
  alternarTema?: () => void;
}

const AppContext = createContext<IAppContext>({});

export function AppProvider(props) {
  const [tema, setTema] = useState<Tema>("");
 
  function alternarTema() {
    setTema(tema === "" ? "dark" : "");
  }
 
  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
export const AppConsumer = AppContext.Consumer;
