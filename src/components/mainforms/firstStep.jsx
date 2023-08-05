import React from "react";
import { useState } from "react";

export default function FirstStep() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const saveStep = (e) => {
    e.preventDefault();
  };

  return (
    <article className="">
      <div className="mb-8">
        <h1 className="font-bold text-4xl mb-2">Personal info</h1>
        <p className="text-Coolgray">
          Please, provide your name, email address, and phone number
        </p>
      </div>
      <form className="" onSubmit={(e) => saveStep(e)}>
        <div>
          <div className="flex flex-col mb-8">
            <label htmlFor="name" className="text-sm mb-2">
              Name
            </label>
            <input
              placeholder="e.g. Stephen King"
              type="text"
              id="name"
              className="w-full outline-none border border-Lightgray p-2 rounded-md focus:border-Purplish transition duration-300 ease-in-out"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="email" className="text-sm mb-2">
              Email Address
            </label>
            <input
              placeholder="e.g. stephenking@lorem.com"
              type="email"
              id="email"
              className="w-full outline-none border border-Lightgray p-2 rounded-md focus:border-Purplish transition duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="number" className="text-sm mb-2">
              Phone Number
            </label>
            <input
              placeholder="e.g. +1 234 567 890"
              type="tel"
              id="number"
              className="w-full outline-none border border-Lightgray p-2 rounded-md focus:border-Purplish transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="flex justify-end pt-20">
          <button
            type="submit"
            className="outline-none border-none bg-Marine text-white py-3 px-5 rounded-lg text-sm hover:bg-Marine/80 transition duration-300 ease-in-out"
          >
            Next Step
          </button>
        </div>
      </form>
    </article>
  );
}
