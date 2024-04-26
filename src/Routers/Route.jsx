import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristSpot from "../Pages/AddTouristsSpot/AddTouristSpot";
import SpotList from "../Pages/SpotList/SpotList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";





const Route = createBrowserRouter([
      {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home/>
                  },
                  {
                        path: '/touristsSpot',
                        element: <AllTouristsSpot/>
                  },
                  {
                        path: '/addSpot',
                        element: <AddTouristSpot/>
                  },
                  {
                        path: '/spotList',
                        element: <SpotList/>
                  },
                  {
                        path: '/login',
                        element: <Login/>
                  },
                  {
                        path: '/register',
                        element: <Register/>
                  }
            ]
      }
])


export default Route;