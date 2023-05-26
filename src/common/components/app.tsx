import { Outlet } from "react-router-dom";
import { useRecordHistories } from "@/core/inventory/store/histories.ts";

export const App = () => {
  useRecordHistories();

  return (
    <div>
      App.
      <hr />
      <Outlet />
    </div>
  );
};
