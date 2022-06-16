import { FC } from "react";
import style from "./index.module.scss";

interface ButtomProps {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className: string;
}

const MyButton: FC<ButtomProps> = ({className, text, onClick}) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default MyButton;