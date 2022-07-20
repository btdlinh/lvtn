import { useRoutes} from 'react-router-dom';
import LogIn from '../components/Authentication/Login/LoginForm';
import Home from '../Pages/Home';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [],
    },
    {
      path: '/login',
      element: <LogIn />,
    },
  ]);
}
