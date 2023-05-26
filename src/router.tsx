import { createBrowserRouter, Navigate } from "react-router-dom";
import { Example, PrivateExample } from "@core/pages/example";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/example" replace />,
  },
  {
    path: "/example",
    element: <Example />,
    children: [
      {
        path: "private",
        element: <PrivateExample />,
      },
    ],
  },
]);
