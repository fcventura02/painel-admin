import useAppData from "../../data/hook/useAppData";
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
      <div className={`flex flex-grow justify-end`}>
        <ButtonTema tema={tema} alternarTema={alternarTema} />
      </div>
    </header>
  );
}
