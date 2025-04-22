import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import PhoneDetail from "../components/PhoneDetail";
import AddBooking from "../components/AddBooking";


export const router = createBrowserRouter([

    {
        path: '/',
        Component:MainLayout,
        errorElement: <ErrorPage/>,

        children:[
            {
                index:true,
                element:<Home></Home>,
                loader:()=> fetch('/phones.json'),
            },

            {
                path: '/my_booking',              
                // hydrateFallbackElement: 
                element:<AddBooking></AddBooking>
            },
            {
                path: '/blogs',
                loader: () =>fetch('/question.json'),
                element:<Blogs></Blogs>
            },
            {
                path: '/Contact',
                hydrateFallbackElement: <span className="loading loading-dots loading-xs"></span>,
                element:<Contact></Contact>
            },
            {
                path:"/detail/:id",
                element: <PhoneDetail></PhoneDetail>,
                loader: () =>fetch('/phones.json')
            }
           
        ]
       }
    
])