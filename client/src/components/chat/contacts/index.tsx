import { FC } from "react"
import { Link } from "react-router-dom";
import { IContact } from "../../../models/IContact";
import style from "./contacts.module.scss"

interface ContactProps {
    contacts: IContact[];
    currentContact: number | undefined;
    changeCurrentChat: (index: number, contact: any) => void;
}

const Contacts: FC<ContactProps> = ({contacts, currentContact, changeCurrentChat}) => { 
    return (
        <div className={`d-flex flex-column w-25 p-2 ${style.container}`}>
            {contacts.map((contact, index) => (
                <div className={`d-flex align-items-center ${style.contact} ${index === currentContact ? style.selected : ""}`} onClick={() => changeCurrentChat(index, contact)}>  
                    <img className={`m-2 ${style.avatar}`} src={contact.avatar} alt="avatar"/>
                    <Link to={contact.nickname} key={contact.nickname}>
                        {contact.nickname}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default  Contacts;