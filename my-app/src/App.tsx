import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import routes from "./constans/routes";
import style from "./styles/app.module.scss"

function App() {
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