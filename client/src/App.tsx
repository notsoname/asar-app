import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import LoginForm from "./components/login";
import routes from "./constans/routes";
import { useAppDispatch, useAppSelector } from "./hooks";
import { checkAuth, login } from "./redux/authReducers/actionCreators";
import style from "./app.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "./components/loader/loader";

function App() {
  const dispatch = useAppDispatch()
  const {auth, isLoading} = useAppSelector(state => state.AuthReducer)
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])

  if (!auth) {
    return (
      isLoading ? <Loader/> : <LoginForm/>
    )
  }

  return (
    <div className={`d-flex ${style.app}`}>
      <Header/>
      <div className={`container p-2 ${style.container}`}>
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