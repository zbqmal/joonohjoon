import MenuTabs from "./MenuTabs";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <MenuTabs />
    {children}
  </>
);

export default Layout;
