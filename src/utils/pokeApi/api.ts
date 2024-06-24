import axios from "axios";
import { MainClient } from "pokenode-ts";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const pokeApi = new MainClient();
