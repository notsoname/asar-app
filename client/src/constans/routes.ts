import LoginForm from '../components/loginForm';
import AdminPage from '../pages/adminPage';
import ChatPage from '../pages/chatPage';
import homePage from '../pages/homePage';
import PostsPage from '../pages/postsPage';
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
];

export default routes;