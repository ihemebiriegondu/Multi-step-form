import React from "react";

export default function PlanCards({
  icon,
  title,
  amount,
  subs,
  clickEvent,
  isActive,
}) {
  return (
    <button
      type="button"
      className={`w-full flex flex-row xsm:flex-col gap-x-4 border border-Lightgray p-3 lg:p-4 rounded-lg hover:border-Purplish transition duration-300 ease-in-out ${
        isActive ? "bg-Alabaster border-Purplish" : "bg-none border-Lightgray"
      }`}
      onClick={clickEvent}
    >
      <div className="xsm:mb-12 mt-3">
        <img src={icon} alt="arcd imag" />
      </div>
      <div className="text-start">
        <h6 className="font-medium">{title}</h6>
        <p className="text-Coolgray">${amount}/{subs === 'Monthly' ? 'mo' : 'yr'}</p>
        <p className="text-sm invisible monthfree">2 months free</p>
      </div>
    </button>
  );
}
