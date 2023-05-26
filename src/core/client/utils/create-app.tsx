import "@common/style/reset.css";
import "virtual:uno.css";
import { createRoot } from "react-dom/client";
import { RouterProvider, RouterProviderProps } from "react-router-dom";

type TOptions = {
  router: RouterProviderProps["router"];
};

export const createApp = ({ router }: TOptions) => {
  createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
  );
};
