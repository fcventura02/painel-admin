import { IconMoon, IconSun } from "../icons";

interface IButtonTema {
  tema: string;
  alternarTema: () => void;
}

export default function ButtonTema({ tema, alternarTema }: IButtonTema) {
  return tema === "dark" ? (
    <div
      onClick={alternarTema}
      className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div
        className={`
            flex items-center justify-center
            bg-white text-yellow-600 
            rounded-full h-6 w-6
      `}
      >
        {IconSun("w-4 h-4")}
      </div>
      <div className={`hidden lg:block items-center mx-auto text-white`}>
        <span className={`text-sm`}>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={alternarTema}
      className={`
        hidden sm:flex items-center justify-end cursor-pointer
        bg-gradient-to-r from-sky-700 to-sky-900
        w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div className={`hidden lg:block items-center mx-auto text-white`}>
        <span className={`text-sm`}>Escuro</span>
      </div>
      <div
        className={`
        flex items-center justify-center
        bg-black text-sky-600 
        rounded-full h-6 w-6  
      `}
      >
        {IconMoon("w-4 h-4")}
      </div>
    </div>
  );
}
