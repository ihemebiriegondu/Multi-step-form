import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThankYou from "../formComponents/thankYou";

export default function Summary() {
  const navigate = useNavigate();
  const [isThankYou, setIsThankYou] = useState(false);
  const plans = JSON.parse(sessionStorage.getItem("plans"));
  const AddOns = JSON.parse(sessionStorage.getItem("addOns"));

  let totalAmount = 0;

  const getTotalAmount = () => {
    let addonTotal = 0;
    AddOns.forEach((addon) => {
      //extract the number from the string
      addonTotal += parseInt(addon.amount.match(/(\d+)/)[0]);
    });
    totalAmount = parseInt(plans.amount) + addonTotal;
  };
  getTotalAmount();

  const submitForms = (e) => {
    e.preventDefault();
    setIsThankYou(true);

    sessionStorage.setItem("plans", JSON.stringify({}));
    sessionStorage.setItem("addOns", JSON.stringify([]));
    sessionStorage.setItem("name", "");
    sessionStorage.setItem("email", "");
    sessionStorage.setItem("number", "");

    setTimeout(() => {
      navigate("/")
    }, 3000);
  };

  return (
    <article className="h-full">
      <div className={`mb-10 ${isThankYou ? "hidden" : "block"}`}>
        <h1 className="font-bold text-4xl mb-2">Finishing up</h1>
        <p className="text-Coolgray">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <form
        onSubmit={(e) => submitForms(e)}
        className={`${isThankYou ? "hidden" : "block"}`}
      >
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
            <p className="font-bold text-Marine">
              ${plans.amount}/{plans.subscription === "Monthly" ? "mo" : "yr"}
            </p>
          </div>
          <hr
            className={`bg-Lightgray mb-6 ${
              AddOns.length > 0 ? "block" : "hidden"
            }`}
          />
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
          <p className="text-Coolgray">
            Total(per {plans.subscription === "Monthly" ? " month" : "year"})
          </p>
          <p className="text-lg text-Purplish font-bold">
            +${totalAmount}/{plans.subscription === "Monthly" ? "mo" : "yr"}
          </p>
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

      {isThankYou && <ThankYou />}
    </article>
  );
}
