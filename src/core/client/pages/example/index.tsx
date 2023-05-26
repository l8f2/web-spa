import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout } from "@common/components/layout";
import { BackComponent } from "@/core/inventory/components/back";
import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import { $histories } from "@/core/inventory/store/histories.ts";

const $count = atom(1);

// const req = new FetchPlus();

export const Example = () => {
  const histories = useStore($histories);
  const count = useStore($count);

  useEffect(() => {
    console.log(1, histories);
  }, [histories]);

  return (
    <Layout>
      公開頁面 Example
      <Outlet />
      <hr />
      <BackComponent histories={histories} />
      <a href="http://localhost:9987/example" target={"_blank"}>
        跳個ˊ頁面
      </a>
      <h1>{count}</h1>
      <button onClick={() => $count.set($count.get() + 1)}>++</button>
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
