import Titulo from "./Titulo";

interface IHeader{
   titulo:string,
   subtitulo:string
}


export default function Header({titulo, subtitulo}: IHeader){
    return(
        <header>
            <Titulo titulo={titulo} subtitulo={subtitulo}/>
        </header>
    )
}