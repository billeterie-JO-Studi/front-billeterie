import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/layout/Root";
import HomePage from "./components/pages/HomePage";
import OffresPage from "./components/pages/OffresPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ErrorPage from "./components/pages/ErrorPage";
import MarketPage from "./components/pages/MarketPage";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from "react";
import Offre from "./models/Offre";
import OffreService from "./services/OffresService";
import { offresState } from "./store/store";

const urlApi = import.meta.env.VITE_API_URL;

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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default function App() {

  const setOffres = useSetRecoilState(offresState); 

  const init = async () => {
    // récupération des offres
    try {
      const response = await axios.get(`${urlApi}/api/offres`);
      console.log(response);
      const listData: unknown[] = response.data.data;

      const listOffre: Offre[] = [];
      listData.forEach((data) => {
        const newOffre: Offre = OffreService.createOffreFromDataApi(data);
        listOffre.push(newOffre);
      });

      setOffres(listOffre); 
    } catch (err) {
      console.log(`erreur est : ${err}`);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <RouterProvider router={router} />;
}
