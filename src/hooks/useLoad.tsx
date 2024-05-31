import axios from "axios";
import { useSetRecoilState } from "recoil";
import Offre from "../models/Offre";
import OffreService from "../services/OffresService";
import { marketState, offresState, userState } from "../store/store";
import useApi from "./useApi";
import User from "../models/User";
import CommandService from "../services/CommandsService";
import CommandType from "../models/Command";

export default function useLoad() {
  const urlApi = import.meta.env.VITE_API_URL;
  const setOffres = useSetRecoilState(offresState);
  const setPanier = useSetRecoilState(marketState);
  const setUser = useSetRecoilState(userState);

  const api = useApi();

  // chargement des offres
  const loadOffre = async () => {
    try {
      const response = await axios.get(`${urlApi}/api/offres`);
      const listData: unknown[] = response.data.data;

      const listOffre: Offre[] = [];
      listData.forEach((data) => {
        const newOffre: Offre = OffreService.createOffreFromDataApi(data);
        listOffre.push(newOffre);
      });

      setOffres(listOffre);
    } catch (err) {
      console.log(err);
    }
  };

  // chargement du panier
  const loadPanier = async () => {
    const dataLocalStorage = localStorage.getItem("panier");
    if (dataLocalStorage) {
      setPanier(JSON.parse(dataLocalStorage));
    }
  };

  // chargement de User
  const loadUser = async () => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) return;

    const response = await api.get(`/users/me`);
    const userLoaded: User = {
      isConnected: true,
      id: response.data.id,
      email: response.data.email,
      firstname: response.data.firstname,
      lastname: response.data.lastname,
      username: response.data.username,
      token: jwt,
    };

    setUser(userLoaded); 
  };

  //chargement des commandes du user connecté
  const loadCommands = async () => {
    const responseAPi = await api.get(`/users/me?populate=commands`);
    try {
      const commandsData: CommandType = CommandService.createCommandFromDataApi(data);
      if (commandsData) {
        return commandsData;
      }
    } catch (error) {}
  }



  return { loadOffre, loadPanier, loadUser, loadCommands };
}
