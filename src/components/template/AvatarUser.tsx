import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface IAvatarUser {
  className?: string;
}

export default function AvatarUser(props: IAvatarUser) {
  const { user } = useAuth();
  return (
    <Link href={"/perfil"} passHref>
      <img
        src={user?.imageUrl ?? "https://picsum.photos/200/300"}
        alt="avatar do usuário"
        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
      />
    </Link>
  );
}
