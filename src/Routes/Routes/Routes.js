import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Details from "../../pages/Details/Details";
import Home from "../../pages/Home/Home ";


export const routes = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:'/category/:id',
            element: <Category></Category>,
            loader: ()=> fetch(`http://localhost:5000/category/01`)
        },
        {
            path: '/details/:id',
            element: <Details></Details>
        }
        
       ] 
    }
])