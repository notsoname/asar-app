import { FC } from "react";
import { Link } from "react-router-dom";
import { IContact } from "../../../models/IContact";
import style from "./chatContainer.module.scss";

interface ChateContainerProps {
    currentChat: IContact
}

const ChatContainer: FC<ChateContainerProps> = ({currentChat}) => {
    console.log(currentChat)
    return (
        <div className={`${style.container}`}>
            <div className={`${style.header} p-2`}>
                <img className={style.avatar} src={currentChat.avatar} alt="avatar" />
                <Link to={currentChat.id}>{currentChat.nickname}</Link>
            </div>
            <div className={`${style.messages}`}>

            </div>
        </div>
    )
}

export default ChatContainer;