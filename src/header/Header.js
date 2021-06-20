import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import routes from "../hard-data/routes";
import Menu from "./Menu";
import Notifications from "./Notifications";

export default function ({}) {
  const [userName, setUserName] = useState(null);
  const menuRef = useRef(null);
  const notificationsRef = useRef(null);
  useEffect(
    async () =>
      setUserName(
        await Auth.currentUserInfo().then((userInfo) => userInfo.username)
      ),
    []
  );
  return (
    <header>
      <Link to={routes.home}>SSN</Link>
      <div>
        <Link to={routes.profile}>{userName}</Link>
        <button
          onClick={() => {
            notificationsRef.current.hidden = !notificationsRef.current.hidden;
          }}
        >
          Notifications
        </button>
        <button
          onClick={() => {
            menuRef.current.hidden = !menuRef.current.hidden;
          }}
        >
          Menu
        </button>
      </div>
      <Menu ref={menuRef} />
      <Notifications ref={notificationsRef} />
    </header>
  );
}
