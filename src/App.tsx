import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/layout/Root";
import HomePage from "./components/pages/HomePage";
import OffresPage from "./components/pages/OffresPage";
import LoginPage from "./components/pages/LoginPage";
import ErrorPage from "./components/pages/ErrorPage";
import NavBarJO from "./components/layout/NavBarJO";
import FooterJO from "./components/layout/FooterJO";
import MarketPage from "./components/pages/MarketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "ticket",
        element: <OffresPage />,
      },
      {
        path: "market", 
        element: <MarketPage />
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
