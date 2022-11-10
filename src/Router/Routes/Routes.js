import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../Pages/Login/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Login/Register";

import AllReview from "../../Pages/Review/AllReview";
import MyReview from "../../Pages/Review/MyReview";
import ReviewAdd from "../../Pages/Review/ReviewAdd";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/service-details/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/service-details/${params.id}`)
        },
        {
          path:'/review-add/:id',
          element:<ReviewAdd></ReviewAdd>,
          loader: ({params})=> fetch(`http://localhost:5000/service-details/${params.id}`)
          
        },
        {
          path:'/all-review/:id',
          element:<AllReview></AllReview>,
          loader: ({params})=> fetch(`http://localhost:5000/all-review/${params.id}`)
        },
        {
          path:'/add-service',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
          // loader: ({params})=> fetch(`http://localhost:5000/all-review/${params.id}`)
        },
        {
          path:'/my-review',
          element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
          // loader: ({params})=> fetch(`http://localhost:5000/all-review/${params.id}`)
        },

        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/Register',
          element: <Register></Register>
        }
      ]
    }
  ])

export default router;