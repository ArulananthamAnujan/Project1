import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import Main from "../../layouts/Main";
import ErrorElement from "../../pages/ErrorElement/ErrorElement";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
]);