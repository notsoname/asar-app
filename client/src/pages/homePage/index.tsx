import Loader from '../../components/loader/loader';
import { useAppSelector } from '../../hooks';

export default function HomePage() {
  const {auth} = useAppSelector(state => state.AuthReducer)
  return (
    <div>
    </div>
  )
}

