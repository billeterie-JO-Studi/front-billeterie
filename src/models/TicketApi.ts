export default interface TicketApi {
  id: number;
  attributes: {
    key_qrcode: string;
    command?: {
      data: {
        id: number;
      }
    }
    offre?: {
      data: {
        id: number;
      }
    }
  },
}