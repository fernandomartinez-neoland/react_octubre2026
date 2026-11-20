import { useState } from "react";
import { saludos } from "../services/funciones.service";
import { Nombre } from "./nombre.component";

interface estructura {
  letra?: string;
  otro: string;
  cambiarT: (parametro: string) => void;
}

export function mensaje(parametro: any) {
  console.log(parametro);
}

export function Img(valor: estructura) {
  const [contador, setContador] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const frutas = [
    { nombre: "pera", color: "verde" },
    { nombre: "manzana", color: "rojo" },
    { nombre: "naranja", color: "anaranjado" },
  ];
  return (
    <>
      <hr />
      <h2>{String(mostrar)}</h2>
      {mostrar ? <Nombre /> : "Sin nombre"}

      {frutas.map((item, index) => {
        return (
          <>
            <h1>nombre: {item.nombre} {index}</h1>
            <hr />
            <h1>color: {item.color} {index}</h1>
            <hr />
          </>
        );
      })}
      <button onClick={() => setMostrar((state) => !state)}>
        Mostrar Nombre
      </button>
      <h1>{saludos()}</h1>
      <h2>{contador}</h2>
      <h2>{valor.letra}</h2>
      <h2>{valor.otro}</h2>

      <button
        onClick={() => {
          mensaje(saludos());
        }}
      >
        Consola
      </button>

      <button onClick={() => valor.cambiarT("sds")}>
        ahora pepito se llama "pepote"
      </button>

      <button onClick={() => setContador((contador) => contador + 1)}>
        contador +1
      </button>
      <hr />
    </>
  );
}
