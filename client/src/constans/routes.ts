import LoginForm from '../components/loginForm';
import homePage from '../pages/homePage';
import PostsPage from '../pages/postsPage';

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
    path: "/posts",
    component: PostsPage,
  },
];

export default routes;