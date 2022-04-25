import axios from "axios";
import { spotify_base_url } from "../config";
import { accessToken } from "./getAccessToken";

export const getUser = () => axios
({
    method: "GET",
    url: `${spotify_base_url}/me`,
    headers: { 
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
     }
});
