import { FC } from "react";
import style from "./index.module.scss";

interface ButtomProps {
    text: string;
    // onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className: string;
}

const MyButton: FC<ButtomProps> = ({className, text}) => {
    return (
        <button className={className}>{text}</button>
    )
}

export default MyButton;