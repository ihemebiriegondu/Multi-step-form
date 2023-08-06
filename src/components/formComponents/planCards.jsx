import React from "react";

export default function PlanCards({
  icon,
  title,
  amount,
  clickEvent,
  isActive,
}) {
  return (
    <button
      type="button"
      className={`w-full border border-Lightgray p-4 rounded-lg hover:border-Purplish transition duration-300 ease-in-out ${
        isActive ? "bg-Magnolia border-Purplish" : "bg-none border-Lightgray"
      }`}
      onClick={clickEvent}
    >
      <div className="mb-12 mt-3">
        <img src={icon} alt="arcd imag" />
      </div>
      <div className="text-start">
        <h6 className="font-medium">{title}</h6>
        <p className="text-Coolgray">{amount}</p>
        <p className="text-sm invisible monthfree">2 months free</p>
      </div>
    </button>
  );
}
