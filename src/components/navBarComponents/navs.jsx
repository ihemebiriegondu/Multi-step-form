import React from "react";

export default function Navs({stepNo, stepTitle, activeNav}) {
  return (
    <div className="flex items-center md:gap-4 lg:gap-8">
      <div className={`border border-Light font-medium px-3.5 py-1.5 m-0 rounded-full ${activeNav ? 'bg-Light text-Marine' : 'bg-none text-white'}`}>{stepNo}</div>
      <div className="flex flex-col uppercase">
        <p className="text-Pastel hidden md:block">step {stepNo}</p>
        <h6 className="text-white font-medium hidden md:block">{stepTitle}</h6>
      </div>
    </div>
  );
}