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
    try {
      const response = await axios.post(`${apiUrl}/api/auth/local`, {
        identifier: loginUser.identifier,
        password: loginUser.password,
      });
  
      localStorage.setItem("jwt", response.data.jwt);
      setUser({
        token: response.data.jwt,
        isConnected: true,
        username: response.data.username,
        email: response.data.email, 
        firstname: response.data.firstname, 
        lastname: response.data.lastname
      });
  
      return true;
    }
    catch (e) {
      return false;
    }
  };

  const logout = async () => {
    setUser({ token: "", isConnected: false });
    localStorage.removeItem("jwt");
  };

  return { login, logout };
}
