import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import LoginForm from "./components/loginForm";
import routes from "./constans/routes";
import { useAppDispatch, useAppSelector } from "./hooks";
import { checkAuth, login } from "./redux/AuthReducers/actionCreators";
import style from "./styles/app.module.scss"
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
    <div>
      <Header/>
      <div className="container-fluid mt-3">
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