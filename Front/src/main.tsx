import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROOT_FILE_PATIENT, ROOT_HOME, ROOT_NEW_CONSULTATION } from "./Constantes/routeConstante";
import Home from "./View/Home";
import ErrorPages from "./View/ErrorPages";
import * as ReactDOM from 'react-dom/client';
import NewConsult from "./View/NewConsult";
import FilePatient from "./View/FilePatient";

const router = createBrowserRouter([
  {
    path: ROOT_HOME,
    element: <Home />,
    errorElement: <ErrorPages />,
  },
  {
    path: ROOT_NEW_CONSULTATION,
    element: <NewConsult />,
    errorElement: <ErrorPages />,
  },
  {
    path: ROOT_FILE_PATIENT,
    element: <FilePatient />,
    errorElement: <ErrorPages />,
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);