import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FirstStep() {
  const navigate = useNavigate();

  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [name, setName] = useState(sessionStorage.getItem('name') || '');
  const [email, setEmail] = useState(sessionStorage.getItem('email') || '');
  const [number, setNumber] = useState(sessionStorage.getItem('number') || '');
  const [emailMatch, setEmailMatch] = useState(true);
  
  const saveStep = (e) => {
    e.preventDefault();
    const inputFields = document.querySelectorAll(".inputF");

    inputFields.forEach((field) => {
      if (field.getAttribute("id") === "email" && !emailMatch) {
        field.classList.add("border-Strawberry");
        field.previousElementSibling.children[1].classList.remove("invisible");
        field.previousElementSibling.children[1].textContent =
          "Invalid Email Address";
      }

      if (field.value === "") {
        field.classList.add("border-Strawberry");
        field.previousElementSibling.children[1].classList.remove("invisible");
        field.previousElementSibling.children[1].textContent =
          "This field is required";
      }
    });

    if (email !== "" && emailMatch === true && name !== "" && number !== "") {
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("number", number);

      navigate("/second");
    }
  };

  return (
    <article className="">
      <div className="mb-10">
        <h1 className="font-bold text-4xl mb-2">Personal info</h1>
        <p className="text-Coolgray">
          Please, provide your name, email address, and phone number
        </p>
      </div>
      <form noValidate className="" onSubmit={(e) => saveStep(e)}>
        <div>
          <div className="flex flex-col mb-8">
            <div className="text-sm mb-2 flex justify-between">
              <label
                htmlFor="name"
                className="transition duration-300 ease-in-out"
              >
                Name
              </label>
              <p className="text-Strawberry invisible" id="">
                This field is required
              </p>
            </div>
            <input
              placeholder="e.g. Stephen King"
              type="text"
              id="name"
              value={name || ''}
              className="inputF w-full outline-none border border-Lightgray p-2 rounded-md focus:border-Purplish transition duration-300 ease-in-out"
              onChange={(e) => {
                setName(e.target.value);
                e.target.classList.remove("border-Strawberry");
                e.target.previousElementSibling.children[1].classList.add(
                  "invisible"
                );
              }}
            />
          </div>
          <div className="flex flex-col mb-8">
            <div className="text-sm mb-2 flex justify-between">
              <label
                htmlFor="email"
                className="transition duration-300 ease-in-out"
              >
                Email Address
              </label>
              <p className="text-Strawberry invisible" id="">
                This field is required
              </p>
            </div>
            <input
              placeholder="e.g. stephenking@lorem.com"
              type="email"
              id="email"
              value={email || ''}
              className="inputF w-full outline-none border border-Lightgray p-2 rounded-md focus:border-Purplish transition duration-300 ease-in-out"
              onChange={(e) => {
                setEmail(e.target.value);
                e.target.classList.remove("border-Strawberry");
                e.target.previousElementSibling.children[1].classList.add(
                  "invisible"
                );
                if (email.match(regex)) {
                  setEmailMatch(true);
                } else {
                  setEmailMatch(false);
                }
              }}
              onBlur={() => {
                if (email.match(regex)) {
                  setEmailMatch(true);
                } else {
                  setEmailMatch(false);
                }
              }}
            />
          </div>
          <div className="flex flex-col mb-8">
            <div className="text-sm mb-2 flex justify-between">
              <label
                htmlFor="number"
                className="transition duration-300 ease-in-out"
              >
                Phone Number
              </label>
              <p className="text-Strawberry invisible" id="">
                This field is required
              </p>
            </div>
            <input
              placeholder="e.g. +1 234 567 890"
              type="tel"
              id="number"
              value={number || ''}
              className="inputF w-full outline-none border border-Lightgray p-2 rounded-md focus:border-Purplish transition duration-300 ease-in-out"
              onChange={(e) => {
                setNumber(e.target.value);
                e.target.classList.remove("border-Strawberry");
                e.target.previousElementSibling.children[1].classList.add(
                  "invisible"
                );
              }}
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
