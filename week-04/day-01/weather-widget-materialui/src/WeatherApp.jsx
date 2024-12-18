import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
export default function WeatherApp() {
  return (
    <div className="weatherApp">
      <h1>Weather App using Material UI</h1>
      <SearchBox></SearchBox>
      <InfoBox></InfoBox>
    </div>
  );
}
