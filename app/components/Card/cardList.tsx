import React from "react";

const CardList = ({ children }: any) => {
  return (
    <>
      <div className="rounded-xl border border-slate-500 bg-white text-slate-600 p-4 mb-4">
        {children}
      </div>
    </>
  );
};

export default CardList;
