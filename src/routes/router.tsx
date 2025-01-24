import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import { adminRoutes } from "./admin.routes";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/admin',
        element:<App/>,
        children:adminRoutes 
    },
    {
        path:'/faculty',
        element:<App/>,
        children:adminRoutes 
    },
    {
        path:'/student',
        element:<App/>,
        children:adminRoutes 
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Registration/>
    },
])
export default router;