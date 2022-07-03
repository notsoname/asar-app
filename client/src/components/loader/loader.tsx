import { FC } from 'react';
import loader from './loader.svg';
import style from "./loader.module.scss";

const Loader: FC = () => {
    return (
        <div className={`d-flex justify-content-center align-items-center vh-100 vw-100 ${style.loader}`}>
            <img src={loader} alt="loader" />
        </div>
    )
}

export default Loader;