import Link from "next/link";

interface IMenuItem {
  texto: string;
  icon: any;
  url?: string;
  className?: string;
  onClick?: (e: any) => void;
}

export default function MenuItem({ url, texto, icon, className, onClick }: IMenuItem) {
  function renderLink() {
    return (
      <a
        className={`
        flex flex-col justify-center items-center
        h-20 w-20 text-gray-600 ${className}
        `}
      >
        {icon}
        <span
          className={`
        text-xs font-light 
        `}
        >
          {texto}
        </span>
      </a>
    );
  }

  return (
    <li
      onClick={onClick}
      className={`
      cursor-pointer
    hover:bg-gray-100 
  `}
    >
      {url ? <Link href={url}>{renderLink()}</Link> : renderLink()}
    </li>
  );
}
