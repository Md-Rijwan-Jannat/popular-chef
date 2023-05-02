import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Components/Login/Login/Login";
import Register from "../../Components/Login/Register/Register";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/register',
            element: <Register/>
        },
      ]
    },
  ]);
export default router;  