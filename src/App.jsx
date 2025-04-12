import "./App.css";
import NavBar from "./Components/NavBar";
import SideNav from "./Components/SideNav";
import Analytics from "./Components/Analytics";

function App() {
  return (
    <div className="leading-7 text-[14px]">
      <NavBar />
      <div className="flex gap-4 my-3">
        <SideNav />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
