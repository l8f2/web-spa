import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export const Example = () => {
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
