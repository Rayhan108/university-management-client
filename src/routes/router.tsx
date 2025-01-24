import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import CreateStudent from "../Pages/Admin/CreateStudent";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
        ]
    },
    {
        path:'/admin',
        element:<App/>,
        children:[
            {
                index:true,
                element:<AdminDashboard/>
            },
            {
                path:'create-student',
                element:<CreateStudent/>
            },
        ]
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