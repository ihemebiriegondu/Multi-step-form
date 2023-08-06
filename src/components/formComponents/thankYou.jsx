import React from "react";
import check from "../../assets/icons/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div>
        <img src={check} alt="check-icon" className="mb-12" />
      </div>
      <h1 className="font-bold text-4xl text-Marine mb-6">Thank You!</h1>
      <p className="text-center text-Coolgray w-full xsm:w-3/4 sm:w-5/6 md:w-11/12 xl:w-3/5 mx-auto">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
