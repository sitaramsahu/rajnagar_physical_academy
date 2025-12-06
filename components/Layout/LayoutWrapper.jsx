// app/components/LayoutWrapper.jsx
"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/admin";

  return (
    <>
      {!hideLayout && <Header />}
      <Toaster position="top-center" reverseOrder={false} />
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
