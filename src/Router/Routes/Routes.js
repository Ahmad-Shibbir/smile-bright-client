import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },{
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