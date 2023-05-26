import { createRoot } from "react-dom/client";
import { App } from "@/app.tsx";
import { RouterProvider, RouterProviderProps } from "react-router-dom";

type TOptions = {
  router?: RouterProviderProps["router"];
};

export const createApp = ({ router }: TOptions) => {
  const root = document.getElementById("root")!;

  createRoot(root).render(
    router ? <RouterProvider router={router} /> : <App />
  );
};
