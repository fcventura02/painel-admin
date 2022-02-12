import { createContext, useEffect, useState } from "react";

interface IAppContext {
  tema?: string;
  alternarTema?: () => void;
}

const AppContext = createContext<IAppContext>({});

export function AppProvider(props) {
  const [tema, setTema] = useState("");

  function alternarTema() {
    const newTheme = tema === "" ? "dark" : ""
    setTema(newTheme);
    localStorage.setItem("tema", newTheme);
  }

  useEffect(() => {
    const temaLocal = localStorage.getItem("tema");
    setTema(temaLocal);
  }, []);

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
