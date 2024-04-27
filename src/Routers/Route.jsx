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
                        loader: () => fetch('http://localhost:5000/sport')
                  },
                  {
                        path: '/sport/:id',
                        element: <PrivateRoute><SingleSport /></PrivateRoute>,
                        loader: ({ params }) => fetch(`http://localhost:5000/sport/${params.id}`)
                  },
                  {
                        path: '/sportUpdate/:id',
                        element: <PrivateRoute> <SportUpdate /> </PrivateRoute>,
                        loader: ({ params }) => fetch(`http://localhost:5000/sport/${params.id}`)
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