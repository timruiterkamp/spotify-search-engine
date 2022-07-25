import { ENDPOINTS } from "./spotifyEndpoints";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

// Create base64 string for the Authorizatin in the headers object
const authorization = `Basic ${Buffer.from(
  `${client_id}:${client_secret}`
).toString("base64")}`;

const authOptions = {
  method: "POST",
  headers: {
    Authorization: authorization,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body:
    refresh_token &&
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
};

export const getSpotifyAccessToken = async () => {
  const response = await fetch(ENDPOINTS.token, authOptions);
  return response.json();
};
