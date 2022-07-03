import { FC, useState } from "react"
import { NavLink } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { login, registration } from "../../redux/authReducers/actionCreators"
import style from "./loginForm.module.scss"
import "react-toastify/dist/ReactToastify.css";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [nickname, setNickname] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [register, setRegister] = useState<boolean>(false)
    // const [values, setValues] = useState({
    //     email: "",
    //     nickname: "",
    //     password: "",
    // })
    // const handleChange = (e: any) => {
    //     setValues({...values, [e.target.name]: e.target.value})
    // }

    const dispatch = useAppDispatch()
    const {error} = useAppSelector(state => state.AuthReducer)

    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(login({nickname, password}))
        if (error) {
            toast.error(error, toastoption)
        }
    }

    const onRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (handleValidation()) {
            dispatch(registration({email, password, nickname}));
        }
    }

    const toastoption: any = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const handleValidation = () => {
        if (nickname.length < 3) {
            toast.error("Никнейм должен быть больше 3 символов", toastoption);
            return false;
        } else if (password.length < 4) {
            toast.error("Пароль должен быть равен или больше 4 символов", toastoption);
            return false;
        } else if (email === "") {
            toast.error("Пароль должен быть равен или больше 4 символов", toastoption);
            return false;
        }
        return true;
    }

    return (
        <>
            <form className={style.login}>
                <div className={style.wrapper}>
                    {register && 
                        <input
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            placeholder="Почта"
                        />
                    }
                    <input
                        className="form-control"
                        onChange={(e) => setNickname(e.target.value)}
                        value={nickname}
                        autoComplete="on"
                        type="text"
                        placeholder="Никнейм"
                    />
                    <input
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Пароль"
                    />
                    <div className="d-flex flex-column justify-content-between">
                        {register 
                            ?   <>
                                    <button className="btn btn-primary" onClick={onRegister} disabled={!email || !password}>Регистрация</button>
                                    <div>Имеется аккаунт? <NavLink to={""} onClick={() => setRegister(!register)}>логин</NavLink></div>
                                </>
                            :   <>
                                    <button className="btn btn-primary" onClick={onLogin} disabled={!nickname || !password}>Войти</button>
                                    <div>Нет аккаунта? <NavLink to={""} onClick={() => setRegister(!register)}>зарегистрироваться</NavLink></div>
                                </>
                        }
                    </div>
                </div>
            </form>
            <ToastContainer/>
        </>
    )
}

export default LoginForm;