import { FC } from 'react';
import loader from './loader.svg';

const Loader: FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
            <img src={loader} alt="loader" />
        </div>
    )
}

export default Loader;