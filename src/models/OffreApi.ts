export default interface OffreApi {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    nb_place: number;
  };
}
