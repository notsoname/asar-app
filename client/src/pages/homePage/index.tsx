<<<<<<< HEAD
import Loader from '../../components/loader/loader';
=======
import Header from '../../components/header';
import Home from '../../components/home';
>>>>>>> bd749e7f0360a2ff3511448de23556fdd8b14048
import { useAppSelector } from '../../hooks';

export default function HomePage() {
  const {auth} = useAppSelector(state => state.AuthReducer)
  return (
    <div>
<<<<<<< HEAD
=======
      <Home/>
>>>>>>> bd749e7f0360a2ff3511448de23556fdd8b14048
    </div>
  )
}

