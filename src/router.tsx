import { createBrowserRouter } from "react-router-dom";
import { Example, PrivateExample } from "@core/pages/example";
import { App } from "@common/components/app.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "example",
        element: <Example />,
        children: [
          {
            path: "private",
            element: <PrivateExample />,
          },
        ],
      },
    ],
  },
]);
