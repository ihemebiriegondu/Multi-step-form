import React from "react";

export default function FirstStep() {
  return (
    <article className="">
      <div className="mb-8">
        <h1 className="font-bold text-4xl mb-2">Personal info</h1>
        <p className="text-Coolgray">
          Please, provide your name, email address, and phone number
        </p>
      </div>
      <form className="">
        <div>
          <div className="flex flex-col mb-8">
            <label htmlFor="name" className="text-sm mb-2">
              Name
            </label>
            <input
              placeholder="e.g. Stephen King"
              type="text"
              id="name"
              className="w-full outline-none border border-Lightgray p-2 rounded-md"
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
              className="w-full outline-none border border-Lightgray p-2 rounded-md"
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
              className="w-full outline-none border border-Lightgray p-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-end pt-20">
          <button
            type="submit"
            className="outline-none border-none bg-Marine text-white py-3 px-5 rounded-lg text-sm"
          >
            Next Step
          </button>
        </div>
      </form>
    </article>
  );
}
