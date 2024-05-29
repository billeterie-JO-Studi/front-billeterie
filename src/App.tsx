import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.css";
import Root from "./components/layout/Root";
import ErrorPage from "./components/pages/ErrorPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import MarketPage from "./components/pages/MarketPage";
import OffresPage from "./components/pages/OffresPage";
import RegisterPage from "./components/pages/RegisterPage";
import { useEffect, useRef } from "react";
import ProfilePage from "./components/pages/ProfilePage";
import PurchaseHistoryPage from "./components/pages/PurchaseHistoryPage";
import useLoad from "./hooks/useLoad";
import { marketState } from "./store/store";


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
        element: <MarketPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "purchase-history",
        element: <PurchaseHistoryPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default function App() {
  const isLoaded = useRef(false);
  const panier = useRecoilValue(marketState);
  const { loadOffre, loadPanier, loadUser } = useLoad();

  useEffect(() => {
    console.log("use Effect sauvegarde panier");
    if (!isLoaded.current) {
      console.log("abandon sauvegarde");
      return;
    }
    console.log("sauvegarde panier");
    localStorage.setItem("panier", JSON.stringify(panier));
  }, [panier]);

  const init = async () => {
    if (isLoaded.current) return;

    const listPromiseLoader = [];
    listPromiseLoader.push(loadOffre());
    listPromiseLoader.push(loadPanier());
    listPromiseLoader.push(loadUser());

    await Promise.all(listPromiseLoader);

    isLoaded.current = true;
  };

  useEffect(() => {
    init();
  }, []);

  return <RouterProvider router={router} />;
}
