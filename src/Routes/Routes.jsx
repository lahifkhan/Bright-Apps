import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import PageNotFound from "../Components/PageNotFound";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Layouts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/apps",
                Component:Apps
            },
            {
                path:"/installation",
                Component:Installation
            },
            {
                path:"/apps/:id",
                Component:AppDetails
            },
            {
                path:"*",
                Component: PageNotFound
            }
        ]
    }
])