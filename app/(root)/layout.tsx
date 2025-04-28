import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
