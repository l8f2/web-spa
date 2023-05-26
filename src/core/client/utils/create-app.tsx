import { createRoot } from "react-dom/client";
import { App } from "@/app.tsx";

type TOptions = {
  router?: Record<string, any>;
};

export const createApp = ({ router }: TOptions) => {
  const root = document.getElementById("root")!;

  console.log(router);

  createRoot(root).render(<App />);
};
