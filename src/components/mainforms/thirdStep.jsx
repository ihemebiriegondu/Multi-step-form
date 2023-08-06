import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AddOnCheckbox from "../formComponents/addOnCheckbox";

export default function ThirdStep() {
  const navigate = useNavigate();
  let allAddOn = JSON.parse(sessionStorage.getItem("addOns"));
  const planSub = JSON.parse(sessionStorage.getItem("plans")).subscription;

  const addOns = [
    {
      title: "Online service",
      info: "Access to multiplayer games",
      amount: 1,
      id: "online",
    },
    {
      title: "Larger storage",
      info: "Extra 1TB of cloud save",
      amount: 2,
      id: "storage",
    },
    {
      title: "Customizable Profile",
      info: "Custom theme on your profile",
      amount: 2,
      id: "profile",
    },
  ];

  const saveStep = (e) => {
    e.preventDefault();
    let values = [];

    const addOnValues = document.querySelectorAll(".addons");
    addOnValues.forEach((value) => {
      if (value.checked) {
        let singleAddon = {};
        singleAddon.title =
          value.parentElement.children[1].children[0].children[0].textContent;
        singleAddon.amount =
          value.parentElement.children[1].children[1].textContent;

        values.push(singleAddon);
      }
    });
    sessionStorage.setItem("addOns", JSON.stringify(values));
    navigate("/summary");
  };

  return (
    <article>
      <div className="mb-10">
        <h1 className="font-bold text-4xl mb-2">Pick add-ons</h1>
        <p className="text-Coolgray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <form onSubmit={(e) => saveStep(e)}>
        <div className="flex flex-col gap-5">
          {addOns.map((addOn) => (
            <AddOnCheckbox
              key={addOn.id}
              title={addOn.title}
              info={addOn.info}
              amount={planSub === "Monthly" ? addOn.amount : addOn.amount * 10}
              isChecked={allAddOn.some(
                (addOns) => addOns.title === addOn.title
              )}
            />
          ))}
        </div>

        <div className="flex justify-between pt-20">
          <Link
            to={"/second"}
            className="text-Coolgray hover:text-Marine transition duration-300 ease-in-out font-medium"
          >
            Go Back
          </Link>
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
