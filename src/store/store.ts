import { atom } from "recoil";

import TokenJwt from "../models/TokenJwt";

export const tokenJwtState = atom<TokenJwt>({
  key: "tokenJwtState",
  default: {
    isValid: false,
  },
});
