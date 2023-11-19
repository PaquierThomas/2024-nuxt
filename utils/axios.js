import axios from "axios";

//  CLient axios global
export const client = axios.create({
  // baseURL: import.meta.env
  baseURL: process.env.NUXT_PUBLIC_API_URL,
});
