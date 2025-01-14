import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import React from "react";

const Main = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Main;
