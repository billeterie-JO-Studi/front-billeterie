import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/store";

const apiUrl = import.meta.env.VITE_API_URL;

type LoginUser = {
  identifier: string;
  password: string;
};

export default function useAuthentification() {
  const setUser = useSetRecoilState(userState);

  const login = async (loginUser: LoginUser) => {
    
    const response = await axios.post(`${apiUrl}/api/auth/local`, {
      identifier: loginUser.identifier,
      password: loginUser.password,
    });

    localStorage.setItem('jwt', response.data.jwt);   
    setUser({ token: response.data.jwt, isConnected: true });
  };

  const logout = async () => {
    setUser({ token: "", isConnected: false });
    localStorage.removeItem('jwt');
  };

  return { login, logout };
}
