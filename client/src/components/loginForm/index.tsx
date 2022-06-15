import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { login, logout, registration } from "../../redux/AuthReducers/actionCreators"
import MyButton from "../../UI/button"
import style from "./loginForm.module.scss"

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const {error} = useAppSelector(state => state.AuthReducer)

    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(login({email, password}))
    }

    const onRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(registration({email, password}))
    }

    return (
        <form className={style.login}>
            <div className={style.wrapper}>
                <input
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email"
                />
                <input
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                />
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={onLogin} disabled={!email || !password}>Войти</button>
                    <button className="btn btn-primary" onClick={onRegister} disabled={!email || !password}>Регистрация</button>
                </div>
                {error && <div>{error}</div>}
            </div>
        </form>
    )
}

export default LoginForm;