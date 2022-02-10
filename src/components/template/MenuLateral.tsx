import { IconHome, IconLogout, IconNotification, IconSettings } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface IMenuLateral {}

export default function MenuLateral(props: IMenuLateral) {
  return (
    <aside
      className={`
    flex flex-col
    bg-gray-200
    dark:bg-gray-900 
  `}
    >
      <div
        className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Início" icon={IconHome} />
        <MenuItem url="/ajustes" texto="Ajustes" icon={IconSettings} />
        <MenuItem
          url="/notificacoes"
          texto="Notificações"
          icon={IconNotification}
        />
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log("Saindo")}
          texto="Sair"
          className="text-red-600 dark:text-red-600 
          hover:bg-red-600 
          hover:text-white hover:dark:text-white"
          icon={IconLogout}
        />
      </ul>
    </aside>
  );
}
