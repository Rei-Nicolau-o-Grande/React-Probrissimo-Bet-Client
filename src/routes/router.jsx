import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import User from "../pages/user/User.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/user",
        element: <User/>
    }
])

export default router;