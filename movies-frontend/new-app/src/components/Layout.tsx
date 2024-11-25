import { Outlet } from "react-router-dom";
import React from "react";

const Layout: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Layout;
