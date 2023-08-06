import React from "react";

export default function Navs({stepNo, stepTitle, activeNav}) {
  return (
    <div className="flex items-center gap-8">
      <div className={`border border-Light px-3.5 py-1.5 m-0 rounded-full ${activeNav ? 'bg-Light' : 'bg-none'}`}>{stepNo}</div>
      <div className="flex flex-col uppercase">
        <p className="text-Pastel">step {stepNo}</p>
        <h6 className="text-white font-medium">{stepTitle}</h6>
      </div>
    </div>
  );
}