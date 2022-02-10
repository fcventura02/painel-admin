import Layout from "../components/template/Layout";
import { AppConsumer } from "../data/context/AppContext";

export default function Notification() {
  return (
    <Layout
      titulo="Notificações"
      subtitulo="Fique por dentro do que tem acontecido"
    >
      <AppConsumer>
        {dados=><h3>{dados.name}</h3>}
      </AppConsumer>
    </Layout>
  );
}
