export default interface Command {
  id: number;
  reference: string;
  datePurchasse: Date;
  totalPrice: number;
  idUser: number; 
  tickets: [
    id: number
  ]
}


