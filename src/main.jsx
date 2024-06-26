import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router";
import AuthProvider from "./ContextApi/AuthProvider";
import {HelmetProvider } from 'react-helmet-async';
import { ToastContainer} from 'react-toastify';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
     </HelmetProvider>
     <ToastContainer />
  </React.StrictMode>
);
