import Header from '../../components/header';
import { useAppSelector } from '../../hooks';

export default function HomePage() {
  const {auth} = useAppSelector(state => state.AuthReducer)
  return (
    <div>
      {auth ? 'logged' : 'unlogged'}
    </div>
  )
}

