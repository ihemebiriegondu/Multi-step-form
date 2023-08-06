import React from "react";
import { useLocation } from "react-router-dom";
import Navs from "./navs";

export default function NavBar() {
  const location = useLocation();
  const navLocation = location.pathname;

  const navs = [
    { stepname: "your info", isActive: navLocation === "/" },
    { stepname: "select plan", isActive: navLocation === "/second" },
    { stepname: "add-ons", isActive: navLocation === "/third" },
    { stepname: "summary", isActive: navLocation === "/summary" },
  ];

  return (
    <aside className="p-12 flex flex-col gap-10">
      {navs.map((nav, i) => (
        <Navs
          key={nav.stepname}
          stepNo={i + 1}
          stepTitle={nav.stepname}
          activeNav={nav.isActive}
        />
      ))}
    </aside>
  );
}
