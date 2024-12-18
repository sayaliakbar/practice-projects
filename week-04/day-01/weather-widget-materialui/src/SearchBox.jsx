import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function SearchBox() {
  let [city, setCity] = useState("");
  let [label, setLabel] = useState("City");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      console.log(city);
      setLabel("City");
      setCity("");
    } else {
      setLabel("Please enter city!");
    }
  };
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <h3>Search for the weather</h3>
      <form action="/" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}
