import axios from "axios";


export const api = axios.create({
  baseURL: "192.168.1.66:3333"
})