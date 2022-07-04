import Contacts from "./contacts";
import style from "./chat.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllUsers } from "../../redux/usersReducers/actionCreators";
import ChatContainer from "./chatContainer";
import { IContact } from "../../models/IContact";

const Chat = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    const {contacts} = useAppSelector(state => state.UsersRecuder)
    const [currentContact, setCurrentContact] = useState<number | undefined>(undefined)
    const [currentChat, setCurrentChat] = useState<IContact>()
    const changeCurrentChat = (index: number, contact: IContact) => {
        setCurrentContact(index)
        setCurrentChat(contact)
    }

    return (
        <div className={style.container}>
            <Contacts 
                contacts={contacts}
                currentContact={currentContact}
                changeCurrentChat={changeCurrentChat}/>
            <>
                {currentChat === undefined
                    ? <div className="d-flex justify-content-center align-items-center h-100 w-100">Welcome!</div>
                    : <ChatContainer currentChat={currentChat}/>}
            </>
        </div>
    )
}

export default Chat;