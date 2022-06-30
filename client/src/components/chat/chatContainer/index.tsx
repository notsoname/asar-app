import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmojiSmile, Send } from "react-bootstrap-icons";
import { IContact } from "../../../models/IContact";
import style from "./chatContainer.module.scss";
import Picker from 'emoji-picker-react';
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getMessages, sendMessage } from "../../../redux/MessageReducers/actionCreators";
import { API_URL } from "../../../api";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

interface ChateContainerProps {
    currentChat: IContact
}

const ChatContainer: FC<ChateContainerProps> = ({currentChat}) => {
    const {nickname} = currentChat;

    const socket = useRef<any>();
    const dispatch = useAppDispatch();
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)
    const [message, setMessage] = useState<any>("")
    const {currentUser} = useAppSelector(state => state.AuthReducer)
    const scrollRef = useRef<any>();
    const [arrivalMessage, setArrivalMessage] = useState<any>(null);
    const {messages, isLoading} = useAppSelector(state => state.Messagereducer)
    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(sendMessage({to: nickname, message}));
        console.log(messages)
        // socket.current.emit("send-msg", {
        //     to: currentChat.nickname,
        //     from: currentUser.nickname,
        //     message: message
        // })

        // const msgs = [...message];
        // msgs.push({ fromSelf: true, message });
        // setMessage(msgs);
    }

    useEffect(() => {
        dispatch(getMessages(currentChat.nickname))
    }, [currentChat])
    // useEffect(() => {
    //     socket.current = io(API_URL)
    //     socket.current.emit("add-user", currentUser.nickname)
    // }, [])


    const onEmojiClick = (event: any, emojiObject: any) => {
        let msg = message;
        msg += emojiObject.emoji;
        setMessage(msg)
    };

    // useEffect(() => {
    //     if (socket.current) {
    //       socket.current.on("msg-recieve", (msg: any) => {
    //         setArrivalMessage({ fromSelf: false, message: msg });
    //       });
    //     }
    //   }, []);

    // useEffect(() => {
    // arrivalMessage && setMessages((prev: any) => [...prev, arrivalMessage]);
    // }, [arrivalMessage]);

    // useEffect(() => {
    // scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, [messages]);


    return (
        <div className={`${style.container}`}>
            <div className={`${style.header} p-2`}>
                <img className={style.avatar} src={currentChat.avatar} alt="avatar" />
                <h2>{currentChat.nickname}</h2>
            </div>
            <div className={`${style.messages} p-2`}>
               {messages.length 
                    ? messages.map(message => (
                        <div ref={scrollRef} key={uuidv4()} className={`message ${message.fromSelf ? style.sended : "recieved"}` }>
                            <p>{message.message}</p>
                        </div>))
                    : <div>Напишите что-нибудь</div>
                }
            </div>
            <Form className={`d-flex ${style.input}`} onSubmit={handleSendMessage}>
            {showEmojiPicker ? <div className={style.picker}><Picker onEmojiClick={onEmojiClick}/></div> : ""}
            <EmojiSmile onClick={() => setShowEmojiPicker(!showEmojiPicker)}/>
                <Form.Group className="w-100">
                    <Form.Control className={`h-100`} type="text" placeholder="сообщение..." value={message} onChange={e => setMessage(e.target.value)}></Form.Control>
                </Form.Group>
                <Button className="w-25" variant="primary" type="submit" disabled={!message.length}><Send/></Button>
            </Form>
            
        </div>
    )
}

export default ChatContainer;