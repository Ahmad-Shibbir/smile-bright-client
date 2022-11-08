import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
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