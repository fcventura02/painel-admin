import { ReactNode } from "react";
import useAppData from "../../data/hook/useAppData";
import Contents from "./Contents";
import Header from "./Header";
import MenuLateral from "./MenuLateral";

interface ILayoutProps {
  titulo: string;
  subtitulo: string;
  children: ReactNode;
}

export default function Layout({ titulo, subtitulo, children }: ILayoutProps) {
  const { tema } = useAppData();
  return (
    <div
      className={`
        ${tema} flex h-screen w-screen 
        `}
    >
      <MenuLateral />
      <div
        className={`
            flex flex-col w-full p-7
            bg-gray-300 dark:bg-slate-800
        `}
      >
        <Header titulo={titulo} subtitulo={subtitulo} />
        <Contents>{children}</Contents>
      </div>
    </div>
  );
}
