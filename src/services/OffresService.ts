import Offre from "../models/Offre";
import OffreApi from "../models/OffreApi";

export default class OffreService {
  static isOffre(data: any): data is OffreApi {
    if (
      typeof data.id === "number" &&
      "attributes" in data &&
      typeof data.attributes.name === "string" &&
      typeof data.attributes.description === "string" &&
      typeof data.attributes.price === "number" &&
      typeof data.attributes.nb_place === "number"
    ) {
      return true;
    }
    return false;
  }

  static createOffreFromDataApi(dataApi: any): Offre {
    if (this.isOffre(dataApi)) {
      const newOffre: Offre = {
        id: dataApi.id,
        name: dataApi.attributes.name,
        description: dataApi.attributes.description,
        price: dataApi.attributes.price,
        nbPlace: dataApi.attributes.nb_place,
      };
      return newOffre;
    }
    throw new Error("Erreur de type ");
  }
}
