import { Img } from "./components/img.component";
import "./App.css";
import pc from "./assets/pc.webp";
import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router";

function App() {
  const [titulo, setTitulo] = useState<string>("pepito");
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/hijo" state={{ estado: "value", algo: "lo que sea" }}>
              {" "}
              Hijo
            </Link>

            <p></p>

            <Link to="/hermano"> Hermano</Link>
          </li>
          <li></li>
        </ul>
      </header>
      <main>
        <div className="container">

        <Outlet />
        </div>
        <h1>Hola mundo!</h1>
      </main>
      <footer>sadfcwefew</footer>

      <Img cambiarT={setTitulo} letra={titulo} otro={"otra cosa"}/>
      {/* <img src={pc} alt="" /> */}
    </>
  );
}

export default App;
