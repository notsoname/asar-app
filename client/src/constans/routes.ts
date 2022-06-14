import LoginForm from '../components/loginForm';
import homePage from '../pages/homePage';

const routes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/login",
    component: LoginForm,
  },
];

export default routes;