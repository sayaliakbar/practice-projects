import Header from "./components/Header.jsx";
import Joblist from "./components/Joblist.jsx";
import FilterBar from "./components/FilterBar.jsx";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container flex flex-col items-center">
      {/* Header section */}
      <Header />

      {/* Filter bar for job listings */}
      <FilterBar />

      {/* Job listings section */}
      <Joblist />
    </div>
  );
}

export default App;
