import { ReactNode } from "react";
import Contents from "./Contents";
import Header from "./Header";
import MenuLateral from "./MenuLateral";

interface ILayoutProps{
    titulo:string,
    subtitulo:string,
    children: ReactNode
}

export default function Layout({titulo, subtitulo, children}: ILayoutProps){
    return(
        <div>
            <Header titulo={titulo} subtitulo={subtitulo}/>
            <MenuLateral/>
            <Contents>
                {children}
            </Contents>
        </div>
    )
}