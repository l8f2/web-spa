import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout } from "@common/components/layout";
import { BackComponent } from "@/core/inventory/components/back";
import { useStore } from "@nanostores/react";
import { histories } from "@common/store";

// const req = new FetchPlus();

export const Example = () => {
  const _histories = useStore(histories);

  useEffect(() => {
    console.log(1, _histories);
  }, [_histories]);

  return (
    <Layout>
      公開頁面 Example
      <Outlet />
      <hr />
      <BackComponent histories={_histories} />
      <a href="http://localhost:9987/example" target={"_blank"}>
        跳個ˊ頁面
      </a>
    </Layout>
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
