import React from "react";
import Footer from "@/components/template/Footer";
import HeaderSSR from "./(header)/page";

const LayoutProvider = ({ children }) => {
  // const getLayout = (children: React.ReactNode): React.ReactNode => {
  //   switch (pathname) {
  //     case "/":
  //       return (
  //         <>
  //           <Header />
  //           {children}
  //           <Footer />
  //         </>
  //       );
  //     case "/dashboard":
  //       return (
  //         <>
  //           <HeaderDashboard />
  //           {children}
  //           <FooterDashboard />
  //         </>
  //       );
  //     case "/login":
  //     case "/signup":
  //       return (
  //         <>
  //           <HeaderAuth />
  //           {children}
  //           <FooterAuth />
  //         </>
  //       );
  //     default:
  //       return (
  //         <>
  //           <Header />
  //           {children}
  //           <Footer />
  //         </>
  //       );
  //   }
  // };

  return (
    <>
      <HeaderSSR />
      {children}
      <Footer />
    </>
  );
};

export default LayoutProvider;
