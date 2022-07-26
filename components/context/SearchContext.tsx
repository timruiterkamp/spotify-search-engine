import { ApolloError, useLazyQuery } from "@apollo/client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { SEARCHQUERY } from "../graphql/queries/SpotifyQueries";

interface SearchContextProps {
  spotifyResults: any;
  searchSpotify: (value: string) => void;
  searchLoading: boolean;
  searchError: ApolloError | undefined;
}

interface SearchContextProviderProps {
  children?: ReactNode;
}

const SearchContextDefaults: SearchContextProps = {
  spotifyResults: [],
  searchSpotify: (value: string) => null,
  searchLoading: false,
  searchError: undefined,
};
const SearchContext = createContext<SearchContextProps>(SearchContextDefaults);

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [spotifyResults, setSpotifyResults] = useState(null);
  const [
    searchSpotifyAPI,
    { data: searchData, loading: searchLoading, error: searchError },
  ] = useLazyQuery(SEARCHQUERY);

  const searchSpotify = (value: string) => {
    return searchSpotifyAPI({
      variables: {
        q: value,
      },
    });
  };

  // If search query is performed, update the spotifyResults when data is available
  useEffect(() => {
    if (searchData) {
      setSpotifyResults(searchData.search);
    }
  }, [searchData]);

  return (
    <SearchContext.Provider
      value={{
        spotifyResults,
        searchSpotify,
        searchLoading,
        searchError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
