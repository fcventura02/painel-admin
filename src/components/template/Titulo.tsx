interface ITitulo{
    titulo:string,
    subtitulo:string,
}


export default function Titulo({titulo, subtitulo}: ITitulo){
    return(
        <div>
            <h1 className={`
            
            `}>{titulo}</h1>
            <h2 className={`
            
            `}>{subtitulo}</h2>
        </div>
    )
}