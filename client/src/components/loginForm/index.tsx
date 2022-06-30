import { FC, useState } from "react"
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { login, registration } from "../../redux/AuthReducers/actionCreators"
import style from "./loginForm.module.scss"

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [nickname, setNickname] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [register, setRegister] = useState<boolean>(false)
    
    const dispatch = useAppDispatch()
    const {error} = useAppSelector(state => state.AuthReducer)

    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(login({nickname, password}))
    }

    const onRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(registration({email, password, nickname}))
    }

    return (
        <form className={style.login}>
            <div className={style.wrapper}>
                {register && 
                    <input
                        className="form-control"
                        onChange={(e) => setNickname(e.target.value)}
                        value={nickname}
                        type="text"
                        placeholder="Никнейм"
                    />
                }
                <input
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    autoComplete="on"
                    type="text"
                    placeholder="Почта"
                />
                <input
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Пароль"
                />
                <div className="d-flex flex-column justify-content-between">
                    {register ? <>
                                    <button className="btn btn-primary" onClick={onRegister} disabled={!email || !password}>Регистрация</button>
                                    <div>Имеется аккаунт? <NavLink to={""} onClick={() => setRegister(!register)}>логин</NavLink></div>
                                </>
                              : <>
                                    <button className="btn btn-primary" onClick={onLogin} disabled={!email || !password}>Войти</button>
                                    <div>Нет аккаунта? <NavLink to={""} onClick={() => setRegister(!register)}>зарегистрироваться</NavLink></div>
                                </>
                    }
                </div>
                {error && <div>{error}</div>}
            </div>
        </form>
    )
}

export default LoginForm;