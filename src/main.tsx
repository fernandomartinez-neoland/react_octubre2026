import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Hijo } from "./components/hijo.component.tsx";
import { Hermano } from "./components/hermano.component.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        path:'/hijo',
        Component:Hijo
      },
      {
        path:'/hermano',
        Component:Hermano
      },
      {}
    ]
  },
  {
    path:'*',
    element:<h1>not found </h1>
  },
  {},
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
);
