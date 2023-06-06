import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import LayoutProvider from "@/App";
import Journal from "@/pages/Journal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutProvider />,
    children: [
      { path: "", element: <Home /> },
      { path: "journal", element: <Journal /> },
    ],
  },
]);

export default router;
