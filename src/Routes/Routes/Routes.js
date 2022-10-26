import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Details from "../../pages/Details/Details";
import Home from "../../pages/Home/Home ";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import Blog from "../../sheard/Blog/Blog";
import FAQ from "../../sheard/FAQ/FAQ";


export const routes = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:() => fetch('http://localhost:5000/pythonCourse')
        },
        {
            path:'/category/:id',
            element: <Category></Category>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: ({params})=> fetch(`http://localhost:5000/details/${params.id}`)
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
        }

        
       ] 
    }
])