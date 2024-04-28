import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristSpot from "../Pages/AddTouristsSpot/AddTouristSpot";
import SpotList from "../Pages/SpotList/SpotList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import SingleSport from "../Componets/SingleSport/SingleSport";
import SportUpdate from "../Componets/SportUpdate/SportUpdate";
import FindCountry from "../Componets/FindCountry/FindCountry";
import SingleSportUser from "../Componets/SingleSportUser/SingleSportUser";




const Route = createBrowserRouter([
      {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/touristsSpot',
                        element: <AllTouristsSpot />,
                        loader: () => fetch('https://tourism-management-server-steel.vercel.app/sport')
                  },
                  {
                        path: '/sportUser/:id',
                        element: <PrivateRoute><SingleSport /></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://tourism-management-server-steel.vercel.app/sport/${params.id}`)
                  },
                  {
                        path: '/sport/:id',
                        element: <PrivateRoute><SingleSportUser /></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://tourism-management-server-steel.vercel.app/sport/${params.id}`)
                  },
                  {
                        path: '/sportUpdate/:id',
                        element: <PrivateRoute> <SportUpdate /> </PrivateRoute>,
                        loader: ({ params }) => fetch(`https://tourism-management-server-steel.vercel.app/sport/${params.id}`)
                  },
                  {
                        path: '/countryName/:country',
                        element: <FindCountry />,
                        loader: ({ params }) => fetch(`https://tourism-management-server-steel.vercel.app/sportByCountry/${params.country}`),

                  },
                  {
                        path: '/addSpot',
                        element: <PrivateRoute><AddTouristSpot/></PrivateRoute>
                  },
                  {
                        path: '/spotList',
                        element: <PrivateRoute><SpotList /></PrivateRoute>,
                        
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