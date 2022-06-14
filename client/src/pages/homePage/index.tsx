import Header from '../../components/header';
import { useAppSelector } from '../../hooks';

export default function HomePage() {
  const {users} = useAppSelector(state => state.AuthReducer)
  console.log(users)
  return (
    <div>
      Hello
    </div>
  )
}

