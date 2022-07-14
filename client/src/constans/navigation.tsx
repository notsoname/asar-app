import { ChatDotsFill, HouseDoorFill, Key, MusicNoteList, PeopleFill } from "react-bootstrap-icons";

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

 export const adminNav = [
   ...nav,
   {
    name: "ADMIN",
    link: "/admin",
    icon: <Key/>
  },
 ] 

export default nav;