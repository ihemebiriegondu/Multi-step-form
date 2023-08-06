import React from "react";
import { Link } from "react-router-dom";

export default function Summary() {
  return (
    <article>
      <div className="mb-10">
        <h1 className="font-bold text-4xl mb-2">Finishing up</h1>
        <p className="text-Coolgray">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <form>
        <div className="bg-Magnolia px-6 rounded-lg">
          <div className="flex justify-between items-center py-6">
            <div className="">
              <h6 className="font-medium">Arcard(monthly)</h6>
              <Link to={"/second"} className="underline text-Coolgray hover:text-Purplish transition duration-300 ease-in-out">Change</Link>
            </div>
            <p className="font-bold text-Marine">$9/mo</p>
          </div>
          <hr className="bg-Lightgray mb-6" />
          <div className="flex justify-between items-center pb-6">
            <p className="text-Coolgray">Online service</p>
            <p>+$1/mo</p>
          </div>
          <div className="flex justify-between items-center pb-6">
            <p className="text-Coolgray">Online service</p>
            <p>+$1/mo</p>
          </div>
        </div>
        <div className="mt-8 flex justify-around items-center pb-6">
          <p className="text-Coolgray">Total(per month)</p>
          <p className="text-lg text-Purplish font-bold">+$12/mo</p>
        </div>
        <div className="flex justify-between pt-20">
          <Link
            to={"/third"}
            className="text-Coolgray hover:text-Marine transition duration-300 ease-in-out font-medium"
          >
            Go Back
          </Link>
          <button
            type="submit"
            className="outline-none border-none bg-Marine text-white py-3 px-5 rounded-lg text-sm hover:bg-Purplish transition duration-300 ease-in-out"
          >
            Confirm
          </button>
        </div>
      </form>
    </article>
  );
}
