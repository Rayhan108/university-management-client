import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";




const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/admin',
        element:<App/>,
        children: routeGenerator(adminPaths) 
    },
    {
        path:'/faculty',
        element:<App/>,
        children: routeGenerator(adminPaths) 
    },
    {
        path:'/student',
        element:<App/>,
        children: routeGenerator(adminPaths) 
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