import { SideMenu } from "@common/components/layout/side-menu.tsx";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SideMenu />
      {children}
    </>
  );
};
