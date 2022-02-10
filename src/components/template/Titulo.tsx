interface ITitulo {
  titulo: string;
  subtitulo: string;
}

export default function Titulo({ titulo, subtitulo }: ITitulo) {
  return (
    <div>
      <h1
        className={`
            font-black text-3xl text-gray-900 dark:text-gray-100
            `}
      >
        {titulo}
      </h1>
      <h2
        className={`
        font-light text-sm text-gray-600 dark:text-gray-200
            `}
      >
        {subtitulo}
      </h2>
    </div>
  );
}
