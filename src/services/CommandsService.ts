import Command from "../models/Command";
import CommandApi from "../models/CommandApi";

export default class CommandService {

  static isCommand(data: any): data is CommandApi {
    if (
      typeof data.id === "number" &&
      "attributes" in data &&
      typeof data.attributes.reference === "string" &&
      typeof data.attributes.date_purchasse === "string" &&
      typeof data.attributes.total_price === "number" &&
      typeof data.attributes.createdAt === "string" &&
      typeof data.attributes.updatedAt === "string"
    ) {
      return true;
    }
    return false;
  }

  static createCommandFromDataApi(dataApi: any): Command {
    if (this.isCommand(dataApi)) {
      const newCommand: Command = {
        id: dataApi.id,
        reference: dataApi.attributes.reference,
        datePurchasse: new Date(dataApi.attributes.date_purchasse),
        totalPrice: dataApi.attributes.total_price,
        idUser: 0,
        tickets: dataApi.attributes.tickets.data.map(ticket => ticket.id)
      };
      return newCommand;
    }
    throw new Error("Erreur de type");
  }
}
