import { getSpotifyAccessToken } from "../helpers/getSpotifyAccesstoken";
import { ENDPOINTS } from "../helpers/spotifyEndpoints";

export const resolvers = {
  Query: {
    search: async (_: any, { q }: { q: string }) => {
      const { access_token } = await getSpotifyAccessToken();

      const url = `${ENDPOINTS.search}?q=${q}&type=track%2Cartist&market=ES&limit=15&offset=5`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      return await response.json();
    },
    newReleases: async () => {
      const { access_token } = await getSpotifyAccessToken();

      const response = await fetch(ENDPOINTS.newReleases, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const data = await response.json();

      return data.albums;
    },
  },
};
