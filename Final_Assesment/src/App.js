import logo from './logo.svg';

import './App.css';
import Login from './Component/Login';
import Registration from './Component/Registration';
import Password from './Component/Password';
import Dashboard from './Component/Dashboard';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';

const router= createBrowserRouter([
  {path:'/',element:<Login/> },
  {path:'/register',element:<Registration/> },
  {path:'/password',element:<Password/> },
  {path:'/dashboard',element:<Dashboard/> },
])

function App() {
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
