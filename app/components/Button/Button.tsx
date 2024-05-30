import React from "react";

const Button = ({ children }: any) => {
  return (
    <>
      <div className="bg-blue-700 py-2 px-12 text-white rounded-3xl text-center">
        {children}
      </div>
    </>
  );
};

export default Button;
