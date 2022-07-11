import LoginForm from '../components/login';
import ErrorPage from '../pages/404Page';
import AdminPage from '../pages/adminPage';
import ChatPage from '../pages/chatPage';
import homePage from '../pages/homePage';
import MusicPage from '../pages/musicPage';
import ProfilePage from '../pages/profilePage';
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
  {
    path: "/users/:id",
    component: ProfilePage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/chat",
    component: ChatPage,
  },
  {
    path: "/admin",
    component: AdminPage,
  },
  {
    path: "/music",
    component: MusicPage,
  },
  {
    path: "*",
    component: ErrorPage,
  },
];

export default routes;