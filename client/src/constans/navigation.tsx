import { ChatDotsFill, HouseDoorFill, MusicNoteList, PeopleFill } from "react-bootstrap-icons";

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
    {
      name: "MUSIC",
      link: "/music",
      icon: <MusicNoteList/>
    },
  ];

export default nav;