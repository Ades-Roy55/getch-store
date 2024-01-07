// import BelajarReact, { BelajarReact1, BelajarReact2 } from "./BelajarReact";
// import "./App.css";
// import Pertemuan3 from "./Pertemuan3";

import { useState } from "react";

// const sentence = "Wahyu Gemoy";

// const tampilan = {
//   display: "flex",
//   backgroundColor: "#0f0",
//   borderRadius: 16,
// };

// const fruitNames = ["Mangga", "Pisang", "Belimbing"];

// const fruits = [
//   { id: 1, name: "Mangga", price: 15000 },
//   { id: 2, name: "Pisang", price: 10000 },
//   { id: 3, name: "Belimbing", price: 5000 },
// ];
let nama = "Ades"
function App() {
 
 let [count, setCount] = useState(0);
//  console.log(count);
  return(
    <>
    <div>
    <h3>{count}</h3>
    <h3>{nama}</h3>
    <button onClick={()=> {
      // count = 5;
      nama = "Roy"
      setCount(5)
      }}>Ubah</button>
    </div>
    </>
  )
}

export default App;
