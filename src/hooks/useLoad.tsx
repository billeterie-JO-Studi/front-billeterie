import axios from "axios";
import { useSetRecoilState } from "recoil";
import Offre from "../models/Offre";
import OffreService from "../services/OffresService";
import { marketState, offresState } from "../store/store";

export default function useLoad() {
  const urlApi = import.meta.env.VITE_API_URL;
  const setOffres = useSetRecoilState(offresState);
  const setPanier = useSetRecoilState(marketState); 

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

  return {loadOffre, loadPanier}
}
