import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home/Home";
import HomeServiceDetails from "../../Pages/Home/HomePageService/HomeServiceDetails";
import FoodMenu from "../../Pages/FoodMenu/FoodMenu";
import OrderList from "../../Pages/OrderList/OrderList";
import OrderVeiw from "../../Pages/OrderView/OrderVeiw";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import ContactUs from "../../Pages/Contact/ContactUs";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: ([
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/service/details/:id', loader: async ({ params }) => fetch(`http://localhost:5000/service/food/${params.id}`), element: <HomeServiceDetails> </HomeServiceDetails>
            },
            {
                path: '/menu', loader: async () => fetch('http://localhost:5000/service'), element: <FoodMenu></FoodMenu>
            },
            {
                path: '/order/:id', loader: async ({ params }) => fetch(`http://localhost:5000/order/${params.id}`), element: <PrivateRoutes><OrderVeiw></OrderVeiw></PrivateRoutes>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/orderlist', element: <OrderList></OrderList>
            },
            {
                path: '/contact', element: <ContactUs></ContactUs>
            }



        ])
    }
])
export { router }