import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Edit from "@/pages/Edit";
import Preview from "@/pages/Preview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Edit />,
      },
      {
        path: "preview",
        element: <Preview />,
      },
    ],
  },
]);

export default router;
