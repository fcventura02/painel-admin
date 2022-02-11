import useAppData from "../../data/hook/useAppData";
import AvatarUser from "./AvatarUser";
import ButtonTema from "./ButtonTema";
import Titulo from "./Titulo";

interface IHeader {
  titulo: string;
  subtitulo: string;
}

export default function Header({ titulo, subtitulo }: IHeader) {
  const { tema, alternarTema } = useAppData();
  return (
    <header className={`flex`}>
      <Titulo titulo={titulo} subtitulo={subtitulo} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonTema tema={tema} alternarTema={alternarTema} />
        <AvatarUser className="ml-3"/>
      </div>
    </header>
  );
}
