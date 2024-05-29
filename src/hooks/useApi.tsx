import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export default function useApi() {

  const token = localStorage.getItem("jwt");

  const headers = token ? { Authorization: `Bearer ${token}`} : {}; 

  const api = axios.create({
    baseURL: `${apiUrl}/api`, 
    headers: headers
  })

  return api
}