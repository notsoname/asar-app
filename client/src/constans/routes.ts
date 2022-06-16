import LoginForm from '../components/loginForm';
import homePage from '../pages/homePage';
import PostsPage from '../pages/postsPage';
import UsersPage from '../pages/usersPage';

const routes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/login",
    component: LoginForm,
  },
  {
    path: "/users",
    component: UsersPage,
  },
];

export default routes;