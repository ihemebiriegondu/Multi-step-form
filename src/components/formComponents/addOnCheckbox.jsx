import React from "react";

export default function AddOnCheckbox({ id, title, info, amount }) {
  return (
    <label htmlFor={id} className={`flex items-center relative`}>
      <input
        type="checkbox"
        name={id}
        id={id}
        className="addons w-4 h-4 outline-none border-none accent-Purplish peer absolute left-5 flex-none"
      />
      <div className="grow flex justify-between items-center cursor-pointer transition duration-300 ease-in-out relative py-4 pe-5 ps-16 before:-z-10 before:content-[''] before:absolute before:inset-0 before:h-full before:w-full before:border before:border-Lightgray before:rounded-lg before:hover:border-Purplish peer-checked:before:bg-Magnolia peer-checked:before:text-indigo-800 peer-checked:before:border-Purplish peer-checked:before:block">
        <div className="">
          <h6 className="font-medium">{title}</h6>
          <p className="text-Coolgray">{info}</p>
        </div>
        <p className="text-Purplish">{amount}</p>
      </div>
    </label>
  );
}
