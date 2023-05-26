import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchPlus } from "@/core/inventory/fetch-plus";

const req = new FetchPlus();

export const Example = () => {
  useEffect(() => {
    console.log(req);
  }, []);

  return (
    <div>
      公開頁面 Example
      <Outlet />
    </div>
  );
};

const PrivateExampleContent = () => {
  const [v, setV] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setV(true);
    }, 2000);
  }, []);

  return v ? <div>私有頁面 Example</div> : <div>驗證中...</div>;
};

export const PrivateExample = () => {
  return <PrivateExampleContent />;
};
