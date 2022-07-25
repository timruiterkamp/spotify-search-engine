const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const ENDPOINTS = {
  token: "https://accounts.spotify.com/api/token",
  search: "https://api.spotify.com/v1/search",
};

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
  body: JSON.stringify({ grant_type: "refresh_token", refresh_token }),
};

const getSpotifyAccessToken = async () => {
  const response = await fetch(ENDPOINTS.token, authOptions);
  return response.json();
};

const searchSpotifySong = async (search: string) => {
  const { access_token } = await getSpotifyAccessToken();
  const searchObject = {
    q: search,
    type: "track",
    market: "ES",
    limit: 10,
    offset: 5,
  };

  console.log(access_token);

  const url = `${ENDPOINTS.search}?q=${search}&type=track&market=ES&limit=10&offset=5`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  // console.log(response);
};

export default function handler(req: any, res: any) {
  const { method, body } = req;
  if (method === "POST") {
    if (JSON.parse(body)?.search) {
      searchSpotifySong(JSON.parse(body)?.search);
    }
  }
  const name = "john doe";
  res.status(200).json({ name });
}
