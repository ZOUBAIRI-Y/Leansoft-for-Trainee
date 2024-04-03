import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Home_Leansoft from "../pages/Home_Leansoft";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreateProfile from "../pages/CreateProfile";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Contact from "../pages/Contact";
import Guides from "../pages/Guides";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'create-profile',
                element: <CreateProfile />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'edit-profile',
                element: <EditProfile />
            },
            {
                path: 'guides',
                element: <Guides />
            },
            {
                path: '*',
                element: <NoPage />
            }
        ]
    },
    {
        path: '/home-leansoft',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home_Leansoft />
            }
        ]
    }
])