import OffreApi from "../models/OffreApi";
import OffreService from "./OffresService";

test("deux plus deux font quatre", () => {
  expect(2 + 2).toBe(4);
});


test("vérification la bonne conversiont API to state", () => {
  const dataApi: OffreApi = {
    id: 42,
    attributes: {
      name: "Solo",
      description: "Vive les célibataire",
      price: 69,
      nb_place: 1,
    },
  };

  expect(OffreService.createOffreFromDataApi(dataApi)).toEqual({
    id: 42, 
    name: "Solo", 
    description: "Vive les célibataire", 
    price: 69, 
    nbPlace: 1
  })
});

test("vérification que l'erreur est lancé", () => {
  const dataApi: any = {
    id: "42",
    attributes: {
      name: "Solo",
      description: "Vive les célibataire",
      price: "69Dollars",
      nb_place: 1,
    },
  };

  expect(OffreService.createOffreFromDataApi(dataApi)).toThrow("Erreur de type"); 
})
