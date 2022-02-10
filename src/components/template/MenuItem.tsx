import Link from "next/link";

interface IMenuItem {
  url: string;
  texto: string;
  icon: any;
}

export default function MenuItem({ url, texto, icon }: IMenuItem) {
  return (
    <li
      className={`
    hover:bg-gray-100 
  `}
    >
      <Link href={url}>
        <a
          className={`
        flex flex-col justify-center items-center
        h-20 w-20
        `}
        >
          {icon}
          <span
            className={`
        text-xs font-light text-gray-600
        `}
          >
            {texto}
          </span>
        </a>
      </Link>
    </li>
  );
}
