import { useState } from "react";
import "./App.css";
import Universities from "./Universities";

export default function App() {
  const [universities, setUniversities] = useState([]);
  const [name, setName] = useState("");

  function changeName(e) {
    setName(e.target.value);
  }

  async function fetchData(e) {
    e.preventDefault();
    setUniversities(
      await (
        await fetch(`http://universities.hipolabs.com/search?name=${name}`)
      ).json()
    );
  }

  return (
    <div className="App">
      <form onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={changeName}
        />
        <button type="submit">Search</button>
      </form>
      <Universities universities={universities} />
    </div>
  );
}
