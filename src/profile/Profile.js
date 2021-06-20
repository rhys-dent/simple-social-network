import ProfilePicture from "./ProfilePicture";
import Info from "./Info";
import Posts from "./Posts";
import Images from "./Images";
import Friends from "./Friends";
import { useParams } from "react-router";

export default function () {
  const { userId } = useParams();
  return (
    <main>
      Profile
      <ProfilePicture userId={userId} />
      <Info userId={userId} />
      <Posts userId={userId} />
      <Images userId={userId} />
      <Friends userId={userId} />
    </main>
  );
}
