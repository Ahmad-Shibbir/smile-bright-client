import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import AddReview from "../../Pages/Review/AddReview";
import AllReview from "../../Pages/Review/AllReview";
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
          path:'/add-review/:id',
          element:<AddReview></AddReview>,
          loader: ({params})=> fetch(`http://localhost:5000/add-review/${params.id}`)
        },
        {
          path:'/all-review/:id',
          element:<AllReview></AllReview>,
          loader: ({params})=> fetch(`http://localhost:5000/all-review/${params.id}`)
        },

        {
          path:'/login',
          element:<h2>Please Login</h2>
        },
        {
          path:'/Register',
          element: <h2>please register</h2>
        }
      ]
    }
  ])

export default router;