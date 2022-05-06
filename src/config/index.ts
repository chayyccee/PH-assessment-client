import { accessToken } from "../utils/getAccessToken";

export const baseurl = 'https://partner-hero-assessment.herokuapp.com';
// use 'http://localhost:40003' for localhost

export const spotify_base_url = 'https://api.spotify.com/v1';
export const config = {
  headers : {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
}};