import { gql } from "apollo-server-micro";
import { getSpotifyAccessToken } from "../helpers/getSpotifyAccesstoken";
import { ENDPOINTS } from "../helpers/spotifyEndpoints";

const Pagination = `
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  `;
//typeDefs from https://github.com/charlypoly/spotify-graphql/blob/master/lib/schema.ts
export const typeDefs = gql`
  type Track {
    id: String
    album(full: Int): Album
    artists(full: Int, throttle: Int): [Artist]
    available_markets: [String]
    audio_features: AudioFeatures
    disc_number: Int
    duration_ms: Int
    explicit: Boolean
    href: String
    is_playable: Boolean
    name: String
    popularity: Int
    preview_url: String
    track_number: Int
    type: String
    uri: String
  }
  type Artist {
    id: String
    genres: [String]
    href: String
    name: String
    popularity: Int
    type: String
    uri: String
    images: [Image]
    top_tracks(country: String): [Track]
    albums(
      album_type: String
      throttle: Int
      continueOnError: Int
      limit: Int
    ): [Album]
    related_artists(throttle: Int, continueOnError: Int, limit: Int): [Artist]
  }
  type SimplifiedArtist {
    id: String
    href: String
    name: String
    type: String
    uri: String
  }
  type Album {
    id: String
    album_type: String
    artists: [Artist]
    available_markets: [String]
    genres: [String]
    href: String
    label: String
    name: String
    popularity: Int
    release_date: String
    release_date_precision: String
    type: String
    uri: String
    images: [Image]
    tracks(throttle: Int, continueOnError: Int, limit: Int): [Track]
  }
  type SimplifiedAlbum {
    id: String
    album_type: String
    artists: [Artist]
    available_markets: [String]
    href: String
    label: String
    name: String
    type: String
    uri: String
  }
  type PrivateUser {
    id: String
    birthday: String
    country: String
    display_name: String
    email: String
    href: String
    product: String
    uri: String
    tracks(throttle: Int, continueOnError: Int, limit: Int): [SavedTrack]
    playlists(throttle: Int, continueOnError: Int, limit: Int): [Playlist]
    albums: [SavedAlbum]
    top_artists(throttle: Int, continueOnError: Int, limit: Int): [Artist]
    top_tracks(throttle: Int, continueOnError: Int, limit: Int): [Track]
    images: [Image]
    artists(throttle: Int, continueOnError: Int, limit: Int): [Artist]
    devices: [Device]
    player: Player
  }
  type SavedTrack {
    added_at: String
    track: Track
  }
  type SavedAlbum {
    added_at: String
    album: Album
  }
  type PlaylistTrack {
    added_at: String
    track: Track
    added_by: PublicUser
    is_local: Boolean
  }
  type PublicUser {
    id: String
    display_name: String
    href: String
    uri: String
    playlists: [Playlist]
    images: [Image]
  }
  type Playlist {
    id: String
    description: String
    href: String
    name: String
    owner: PublicUser
    uri: String
    tracks(throttle: Int, continueOnError: Int, limit: Int): [PlaylistTrack]
    public: Boolean
    images: [Image]
  }
  type AudioFeatures {
    id: String
    acousticness: String
    analysis_url: String
    danceability: String
    duration_ms: String
    energy: String
    instrumentalness: String
    key: String
    liveness: String
    loudness: String
    mode: String
    speechiness: String
    tempo: String
    time_signature: String
    track_href: String
    valence: String
  }
  type Image {
    height: Int
    url: String
    width: Int
  }
  type Device {
    id: String
    is_active: Boolean
    is_restricted: Boolean
    name: String
    type: String
    volume_percent: Int
  }
  type PlayerContext {
    href: String
    type: String
    uri: String
  }
  type Player {
    timestamp: String
    device: Device
    progress_ms: String
    is_playing: Boolean
    shuffle_state: Boolean
    repeat_state: String
    item: Track
    context: PlayerContext
  }

 

  type SearchArtist {
    href: String
    items: [Artist]
    ${Pagination}
  }

  type SearchTrack {
    href: String
    items: [Track]
    ${Pagination}
  }

  type Search {
    artists: SearchArtist
    tracks: SearchTrack
  }

  type NewReleases {
    href: String
    items: [Album]
    ${Pagination}
  }

  # the schema allows the following query:
  type Query {
    search(q: String!): Search
    newReleases: NewReleases
  }
`;
