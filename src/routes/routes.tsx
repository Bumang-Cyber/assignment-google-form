import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Preview from "@/pages/Preview";
import Edit from "@/pages/Edit";
import Layout from "@/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Edit />,
      },
      {
        path: "/preview",
        element: <Preview />,
      },
    ],
  },
]);

export default router;
