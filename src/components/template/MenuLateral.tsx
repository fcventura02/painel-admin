import { IconHome, IconNotification, IconSettings } from "../icons";
import MenuItem from "./MenuItem";

interface IMenuLateral {}

export default function MenuLateral(props: IMenuLateral) {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Início" icon={IconHome} />
        <MenuItem url="/ajustes" texto="Ajustes" icon={IconSettings} />
        <MenuItem url="/notificacoes" texto="Notificações" icon={IconNotification} />
      </ul>
    </aside>
  );
}
