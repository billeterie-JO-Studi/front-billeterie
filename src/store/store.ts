import { atom } from "recoil";

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
  default: []
})

export const marketState = atom<ItemMarket[]>({
  key: "marketState", 
  default: []
})
