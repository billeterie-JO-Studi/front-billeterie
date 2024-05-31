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
      console.log("response API AUTH ==> ", response);
      
      localStorage.setItem("jwt", response.data.jwt);
      setUser({
        token: response.data.jwt,
        id: response.data.user.id,
        isConnected: true,
        username: response.data.user.username,
        email: response.data.user.email, 
        firstname: response.data.user.firstname, 
        lastname: response.data.user.lastname
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
