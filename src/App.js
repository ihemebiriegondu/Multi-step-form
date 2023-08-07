import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstStep from "./components/mainforms/firstStep";
import NavBar from "./components/navBarComponents/navBar";
import SecondStep from "./components/mainforms/secondStep";
import ThirdStep from "./components/mainforms/thirdStep";
import Summary from "./components/mainforms/summary";

function App() {
  sessionStorage.setItem("plans", JSON.stringify({}));
  sessionStorage.setItem("addOns", JSON.stringify([]));

  return (
    <Router>
      <main className="main bg-Magnolia relative md:bg-white h-full flex w-full p-4 lg:p-8 overflow-x-hidden">
        <nav className="md:h-full bg-sidebarMobile md:bg-sidebarDesktop pt-2 sm:pt-10 pb-32 md:pb-0 md:pt-0 absolute md:static top-0 left-0 right-0 md:static md:basis-1/3 xlg:basis-1/4 2xl:basis-1/5 bg-no-repeat bg-cover md:rounded-xxl">
          <NavBar />
        </nav>
        <section className="px-4 xsm:px-6 sm:px-10 lg:px-16 xlg:px-20 py-10 bg-white absolute top-28 sm:top-48 left-2 xsm:left-4 sm:left-10 right-2 xsm:right-4 sm:right-10 shadow md:shadow-none md:static rounded-xl md:rounded-none md:basis-2/3 xlg:basis-3/4 2xl:basis-4/5">
          <Routes>
            <Route path="/" element={<FirstStep />} />
            <Route path="/second" element={<SecondStep />} />
            <Route path="/third" element={<ThirdStep />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App;
