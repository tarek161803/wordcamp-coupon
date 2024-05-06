import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/tailwind.css";
import Admin from "./layouts/Admin";
import Main from "./layouts/Main";
import Coupon from "./pages/Admin/Coupon";
import Dashboard from "./pages/Admin/Dashboard";
import Gift from "./pages/Admin/Gift";
import Search from "./pages/Admin/Search";
import GetStarted from "./pages/GetStarted";
import KeepInTouch from "./pages/KeepInTouch";
import ParticipantInfo from "./pages/ParticipantInfo";
import PrizePage from "./pages/PrizePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <GetStarted />,
      },
      {
        path: "/info",
        element: <ParticipantInfo />,
      },
      {
        path: "/social",
        element: <KeepInTouch />,
      },
      {
        path: "/prize",
        element: <PrizePage />,
      },
    ],
  },

  {
    path: "/2364624",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "coupon",
        element: <Coupon />,
      },
      {
        path: "gift",
        element: <Gift />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}
