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
      <main className="flex absolute top-0 bottom-0 w-full p-8">
        <nav className="bg-sidebarDesktop basis-1/5 bg-no-repeat bg-cover rounded-xl">
          <NavBar />
        </nav>
        <section className="px-20 py-10 basis-4/5">
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
