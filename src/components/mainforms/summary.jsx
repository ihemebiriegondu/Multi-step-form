import React from "react";
import { Link } from "react-router-dom";

export default function Summary() {
  const plans = JSON.parse(sessionStorage.getItem("plans"));
  const AddOns = JSON.parse(sessionStorage.getItem("addOns"));
  console.log(plans);
  console.log(AddOns);
  //replace(/[^\d\.]*/g, "")
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
              <h6 className="font-medium">
                {plans.title}({plans.subscription})
              </h6>
              <Link
                to={"/second"}
                className="underline text-Coolgray hover:text-Purplish transition duration-300 ease-in-out"
              >
                Change
              </Link>
            </div>
            <p className="font-bold text-Marine">${plans.amount}/{plans.subscription === 'Monthly' ? 'mo' : 'yr'}</p>
          </div>
          <hr className={`bg-Lightgray mb-6 ${AddOns.length > 0 ? 'block' : 'hidden'}`} />
          {AddOns.map((addon) => (
            <div
              key={addon.title}
              className="flex justify-between items-center pb-6"
            >
              <p className="text-Coolgray">{addon.title}</p>
              <p>{addon.amount}</p>
            </div>
          ))}
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
