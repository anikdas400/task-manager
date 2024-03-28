import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Tasks from "../pages/Tasks";
import Chat from "../pages/Chat";
import Setting from "../pages/Setting";
import Profile from "../pages/Profile";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            index:true,
            element:<Tasks></Tasks>
        },
        {
            path:"/chat",
            element:<Chat></Chat>
        },
        {
            path:"/setting",
            element:<Setting></Setting>
        },
        {
            path:"/profile",
            element:<Profile></Profile>
        },
      ]
    },
  ]);
  export default router