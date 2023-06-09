import { createBrowserRouter } from "react-router-dom";

import LayoutProvider from "@/App";
import { Home, Journal } from "@/pages";

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
