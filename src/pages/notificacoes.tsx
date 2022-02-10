import Layout from "../components/template/Layout";
import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";

export default function Notification() {
  const contextData = useAppData()
  return (
    <Layout
      titulo="Notificações"
      subtitulo="Fique por dentro do que tem acontecido"
    >
      <AppConsumer>
        {dados=><h3>{dados.name}</h3>}
      </AppConsumer>
      <h3>{contextData.name}</h3>
    </Layout>
  );
}
