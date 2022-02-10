export default function Logo() {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
            h-14 w-14 bg-indigo-700 rounded-full
        `}
    >
        <span
          className={`
            text-xs font-black
            text-center text-white
        `}
        >
          Filipe
        </span>
        <span
          className={`
            text-xs font-light text-white
        `}
        >
          Code
        </span>
    </div>
  );
}
