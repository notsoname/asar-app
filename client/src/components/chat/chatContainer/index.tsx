import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { Send, SendFill } from "react-bootstrap-icons";
import { IContact } from "../../../models/IContact";
import style from "./chatContainer.module.scss";
import Picker from 'emoji-picker-react';
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getMessages, sendMessage } from "../../../redux/messageReducers/actionCreators";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Form, Button } from "react-bootstrap";

interface ChateContainerProps {
    currentChat: IContact
}

const ChatContainer: FC<ChateContainerProps> = ({currentChat}) => {
    const {nickname} = currentChat;

    const dispatch = useAppDispatch();
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)
    const [message, setMessage] = useState<any>("")
    const {currentUser} = useAppSelector(state => state.AuthReducer)
    const scrollRef = useRef<HTMLDivElement>(null);
    const socket = useRef(io("ws://localhost:8900"))
    const [arrivalMessage, setArrivalMessage] = useState<any>(null);
    const {messages} = useAppSelector(state => state.MessageReducer)
    const [onlineUsers, setOnlineUsers] = useState<Array<string>>([])

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                to: nickname,
                message: message
            })
        })
    }, [])

    useEffect(() => {
        arrivalMessage && dispatch(getMessages(currentChat.nickname))
    }, [arrivalMessage])

    useEffect(() => {
        socket.current.emit("addUser", currentUser.nickname)
        socket.current.on("getUsers", users => {
            setOnlineUsers(users)
        })
    }, [currentUser])

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        socket.current.emit("sendMessage", {
            senderId: currentUser.nickname,
            receiverId: currentChat.nickname,
            text: message 
        })
        dispatch(sendMessage({to: nickname, message}));
        setMessage("")
    }

    useEffect(() => {
        dispatch(getMessages(currentChat.nickname))
    }, [currentChat])

    const onEmojiClick = (event: any, emojiObject: any) => {
        let msg = message;
        msg += emojiObject.emoji;
        setMessage(msg)
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className={`${style.container}`}>
            <div className={`${style.header} p-2`}>
                <img className={style.avatar} src={currentChat.avatar} alt="avatar" />
                <h2>{currentChat.nickname}</h2>
            </div> 
            <div className={`${style.messages} p-2`}>
               {messages.length 
                    ? messages.map((message) => (
                        <div ref={scrollRef} key={uuidv4()} className={`${style.message} ${message.fromSelf ? style.sended : style.recieved}`}>
                            <p>{message.message}</p>
                        </div>))
                    : <h2>Send something</h2>
                }
            </div>
            <Form className={`d-flex w-100 ${style.input}`} onSubmit={handleSendMessage}>
                {showEmojiPicker ? <div className={style.picker}><Picker onEmojiClick={onEmojiClick}/></div> : ""}
                <EmojiEmotionsIcon className={style.emoji} onClick={() => setShowEmojiPicker(!showEmojiPicker)}/>
                <Form.Group className="w-75">
                    <Form.Control
                        type="text" 
                        placeholder="Message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>
                <Button 
                    className="w-25"
                    variant="primary" 
                    type="submit"
                    disabled={!message.length}
                >
                    <span>Send </span>
                    <SendFill/>
                </Button>
            </Form>
            
        </div>
    )
}

export default ChatContainer;