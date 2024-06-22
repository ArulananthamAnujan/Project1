import { createBrowserRouter } from "react-router-dom";

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
            }]
    }
    ]