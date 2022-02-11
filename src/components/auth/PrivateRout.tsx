import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import iconLoading from "../../../public/img/loading.svg";
import useAuth from "../../data/hook/useAuth";

export default function PrivateRout(props) {
  const { user, loading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if(!document.cookie?.includes("admin-template-auth"))
                    window.location.href = "/entrar"
            `,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderLoading() {
    return (
      <div
        className={`
                flex justify-center items-center h-screen
            `}
      >
        <Image src={iconLoading} />
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    Router.push("/entrar");
    return null;
  }
}
