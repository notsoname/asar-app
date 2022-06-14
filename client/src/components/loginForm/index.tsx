import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { login, logout, registration } from "../../redux/AuthReducers/actionCreators"

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()

    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(login({email, password}))
    }

    const onRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(registration({email, password}))
    }

    return (
        <form>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
            />
            <button onClick={onLogin}>Войти</button>
            <button onClick={onRegister}>Регистрация</button>
        </form>
    )
}

export default LoginForm;