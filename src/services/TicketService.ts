import Ticket from "../models/Ticket";
import TicketApi from "../models/TicketApi";

export default class TicketService {
  static isTicket(data: any): data is TicketApi {
    if (
      typeof data.id === "number" &&
      "attributes" in data &&
      typeof data.attributes.key_qrcode === "string" &&
      "offre" in data.attributes 
    ) {
      return true;
    }
    return false;
  }

  static createTicketFromDataApi(dataApi: any): Ticket {
    if (this.isTicket(dataApi)) {
      const newTicket: Ticket = {
        id: dataApi.id,
        qrcode: dataApi.attributes.key_qrcode,
        idOffre: dataApi.attributes.offre.data.id,
      };
      return newTicket;
    }
    throw new Error("Erreur de type");
  }
}
