import { useRoutes } from 'react-router-dom';
import HomePage from '../Pages/Home';
import Login from '../Pages/Login';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);
}
