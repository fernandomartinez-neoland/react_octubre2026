import { useLocation, redirect, useNavigate } from "react-router";
import { useEffect } from "react";

export function Hijo() {
  const navigate = useNavigate();
  const location = useLocation();

useEffect(()=>{
 if (!location.state) {
   navigate("/hermano", { replace: true });
  } else {
    console.log(location.state); // { some: "value" }
  }
}, [location.state, navigate])


 

  return <h1>Hijo</h1>;
}
