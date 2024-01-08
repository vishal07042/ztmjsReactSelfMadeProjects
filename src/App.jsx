import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


// function App() {
//   const [count, setCount] = useState("quote here");

//   return (
//     <>
//       <h1>Random Quote genrator</h1>
//       <h1>{count}</h1>
//       <button
//         onClick={async () => {

//           let raNum= Math.floor(Math.random()*8000);
//           const value = await fetch(
//             "https://jacintodesign.github.io/quotes-api/data/quotes.json"
//           );

//           const con = await value.json();
//           console.log(con[raNum].text);

//           setCount(con[raNum].text);
//         }}
//       ></button>
//     </>
//   );
// }

function App() {
  const [first, setfirst] = useState('');
  return (
    <>
      <h1>hello</h1>
      <h1>{first}</h1>
      <button
        onClick={() => {
          fetch(
             "https://jacintodesign.github.io/quotes-api/data/quotes.json"
          )
            .then((res) => {
              return res.json();
            })
            .then((r) => {
              console.log(r);

              setfirst(r[4].text);
            });
        }}
      >
        click me
      </button>
    </>
  );
}

export default App;
