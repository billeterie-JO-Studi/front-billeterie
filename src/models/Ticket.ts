import Offre from "./Offre";

export default interface Ticket {
  id: number;
  qrcode: string;
  idOffre?: number;
  idCommand?: number;
  offre?: Offre;
}