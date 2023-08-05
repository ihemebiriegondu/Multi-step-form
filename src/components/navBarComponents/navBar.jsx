import React from "react";
import { Link } from "react-router-dom";
import Navs from "./navs";

export default function NavBar() {
  const navs = [
    { stepname: "your info", link: "/" },
    { stepname: "select plan", link: "/second" },
    { stepname: "add-ons", link: "/third" },
    { stepname: "summary", link: "/summary" },
  ];

  return (
    <aside className="p-12 flex flex-col gap-10">
      {navs.map((nav, i) => (
        <Link to={nav.link}>
          <Navs stepNo={i + 1} stepTitle={nav.stepname} />
        </Link>
      ))}
    </aside>
  );
}
