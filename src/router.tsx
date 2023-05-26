import { createBrowserRouter, redirect } from "react-router-dom";
import { Example } from "@core/pages/example";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (() => {
      redirect("/example");
      return null;
    })(),
  },
  {
    path: "/example",
    element: <Example />,
  },
]);
