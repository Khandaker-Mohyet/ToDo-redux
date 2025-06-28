import App from "@/App";
import User from "@/pages/user";
import Task from "@/pages/Task";
import {
  createBrowserRouter,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component:App,
    children:[
      {
        
        path:"user",
        Component: User,
      },
      {
        index:true,
        Component: Task,
      },
      {
        path:"tasks",
        Component: Task,
      },
    ]
  },
]);

export default router;