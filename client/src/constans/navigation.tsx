import { ChatDotsFill, HouseDoorFill, PeopleFill } from "react-bootstrap-icons";

const nav = [
    {
      name: "HOME",
      link: "/",
      icon: <HouseDoorFill/>
    },
    {
      name: "USERS",
      link: "/users",
      icon: <PeopleFill/>
    },
    {
      name: "CHAT",
      link: "/chat",
      icon: <ChatDotsFill/>
    },
  ];

export default nav;