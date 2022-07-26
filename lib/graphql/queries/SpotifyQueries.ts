import { gql } from "@apollo/client";

export const SEARCHQUERY = gql`
  query Search($q: String!) {
    search(q: $q) {
      artists {
        items {
          name
          images {
            url
          }
          top_tracks {
            name
          }
          genres
        }
      }
      tracks {
        items {
          name
          preview_url
          duration_ms
          artists {
            name
          }
          album {
            images {
              url
            }
          }
        }
      }
    }
  }
`;

export const NEW_RELEASES_QUERY = gql`
  query NewReleases {
    newReleases {
      items {
        name
      }
    }
  }
`;
