

export default interface CommandApi {
  id: number; 
  attributes: {
    reference: string; 
    date_purchasse: string; 
    total_price: number; 
    user: {
      data: {
        id: number
      }
    }
    tickets: {
      data: [
        {
          id: number;
        }
      ]
    }
  }
}