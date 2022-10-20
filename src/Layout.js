import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="shadow-md h-12 bg-gray-50 fixed top-0 w-full">
        <div className="w-full h-12 flex justify-center items-center">
          <h3 className="font-medium text-lg font-serif">React Redux Core</h3>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Layout;
