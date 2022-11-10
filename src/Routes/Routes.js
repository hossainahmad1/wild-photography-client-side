import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import DetailsCart from "../pages/DetailsCart/DetailsCart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReview from "../pages/MyReview/MyReview";
import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import Update from "../pages/Update/Update";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/reviewlimit/:id',
                element: <DetailsCart></DetailsCart>,
                loader: ({ params }) => fetch(`https://assignment-review-server.vercel.app/reviewlimit/${params.id}`)
            },
            {
                path: '/service',
                element: <Services></Services>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://assignment-review-server.vercel.app/servicelimit/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])