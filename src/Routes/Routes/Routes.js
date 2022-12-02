import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Details from "../../pages/Details/Details";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home ";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import Blog from "../../sheard/Blog/Blog";
import FAQ from "../../sheard/FAQ/FAQ";
import Footer from "../../sheard/Footer/Footer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:() => fetch('https://assignment-10-server-seven-chi.vercel.app/pythonCourse')
        },
        {
            path:'/category/:id',
            element: <Category></Category>,
            loader: ({params})=> fetch(`https://assignment-10-server-seven-chi.vercel.app/category/${params.id}`)
        },
        {
            path: '/details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({params})=> fetch(`https://assignment-10-server-seven-chi.vercel.app/details/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
            path:'/faq',
            element:<FAQ></FAQ>
        },
        {
            path:'error',
            element: <ErrorPage></ErrorPage>
        },
        {
            path:'footer',
            element:<Footer></Footer>
        }

        
       ] 
    }
])