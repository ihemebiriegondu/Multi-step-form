import React, { useState } from "react";

export default function AddOnCheckbox({ id, title, info, amount, isChecked }) {
  const planSub = JSON.parse(sessionStorage.getItem("plans")).subscription;
  const [isAddOnChecked, setIsAddOnChecked] = useState(isChecked);

  return (
    <label htmlFor={id} className={`flex items-center relative`}>
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={isAddOnChecked || false}
        className="addons w-4 h-4 outline-none border-none accent-Purplish peer absolute z-40 left-3 xsm:left-5 flex-none"
        onChange={() => {setIsAddOnChecked(!isAddOnChecked)}}
      />
      <div className="grow flex justify-between items-center cursor-pointer transition duration-300 ease-in-out relative py-4 pe-3 xsm:pe-5 ps-10 xsm:ps-16 z-30 before:-z-30 before:content-[''] before:absolute before:inset-0 before:h-full before:w-full before:border before:border-Lightgray before:rounded-lg before:hover:border-Purplish peer-checked:before:bg-Magnolia peer-checked:before:text-indigo-800 peer-checked:before:border-Purplish peer-checked:before:block">
        <div className="">
          <h6 className="font-medium">{title}</h6>
          <p className="text-Coolgray">{info}</p>
        </div>
        <p className="text-Purplish ms-1">+${amount}/{planSub === "Monthly" ? 'mo' : 'yr'}</p>
      </div>
    </label>
  );
}
