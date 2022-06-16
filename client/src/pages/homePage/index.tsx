
import Loader from '../../components/loader/loader';
import Header from '../../components/header';
import Home from '../../components/home';
import { useAppSelector } from '../../hooks';

export default function HomePage() {
  const {auth} = useAppSelector(state => state.AuthReducer)
  return (
    <div>
      <Home/>
    </div>
  )
}

