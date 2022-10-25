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
            loader: ()=> fetch(`http://localhost:5000/details/11468ed61aee84de492a8b04158a22f9`)
        }
        
       ] 
    }
])