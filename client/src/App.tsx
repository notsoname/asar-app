import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import LoginForm from "./components/loginForm";
import routes from "./constans/routes";
import { useAppDispatch, useAppSelector } from "./hooks";
import { checkAuth, login } from "./redux/AuthReducers/actionCreators";
import style from "./styles/app.module.scss"

function App() {
  const dispatch = useAppDispatch()
  const {auth} = useAppSelector(state => state.AuthReducer)
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('refresh')
      // dispatch(login({"email": "notsoname@gmail.com", "password": "aaa"}));
      dispatch(checkAuth)
    }
  }, [])

  if (!auth) {
    return <LoginForm/>
  }


  return (
    <div>
      <Header/>
      <div className={style.container}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;