import { atom, selector } from "recoil";

import User from "../models/User";
import Offre from "../models/Offre";
import ItemMarket from "../models/ItemMarket";

export const userState = atom<User>({
  key: "userState",
  default: {
    isConnected: false,
  },
});

export const offresState = atom<Offre[]>({
  key: "offresState",
  default: [],
});

export const marketState = atom<ItemMarket[]>({
  key: "marketState",
  default: [],
});

export const redirectAfterLoginState = atom<string>({
  key: "redirectAfterLoginState", 
  default: "/"
})


// Selector
export const totalCommandSelector = selector({
  key: "totalCommandSelector",
  get: ({ get }) => {
    const listItem = get(marketState);
    const totalCommand = listItem.reduce((accu, curr) => {
      return accu + curr.offre.price * curr.quantity;
    }, 0);

    return totalCommand;
  },
});

export const totalTicketSelector = selector({
  key: "totalTicketSelector",
  get: ({ get }) => {
    const listItem = get(marketState);
    const totalTicket = listItem.reduce((accu, curr) => {
      return accu + curr.quantity;
    }, 0);

    return totalTicket;
  },
});


