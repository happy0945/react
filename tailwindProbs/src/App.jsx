import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    name: "Happy",
    age: 22
  }

  return (
    <>
      <Navbar username="Happy" myobj={obj}/>
      {/* <Navbar channel="Happy" myobj={obj.name} /> */}
    </>
  );
}

export default App;
