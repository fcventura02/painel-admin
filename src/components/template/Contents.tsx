import { Props, ReactNode } from "react";

interface IContents {
    children?: ReactNode,
}


export default function Contents({children}: IContents){
    return(
        <main className={`
         flex flex-col mt-7
        `}>
           {children} 
        </main>
    )
}