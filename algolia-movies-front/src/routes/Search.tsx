import algoliasearch from "algoliasearch";
import { useContext } from "react";
import {
  InstantSearch,
  SearchBox,
  InfiniteHits,
} from "react-instantsearch-dom";
import { Box, Fab } from "@mui/material";
import { SearchContext } from "../contexts/SearchContext";
import { Hit } from "react-instantsearch-core";
import Movie from "../model/Movie";
import { PlusOne } from "@mui/icons-material";
import MoviePreview from "../components/MoviePreview";

let searchClient: any;
if (
  process.env.REACT_APP_ALGOLIA_APPLICATION_ID &&
  process.env.REACT_APP_ALGOLIA_API_KEY
) {
  searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
    process.env.REACT_APP_ALGOLIA_API_KEY
  );
} else {
  throw new Error("Algolia credentials not found");
}

function MovieHit({ hit }: { hit: Hit<Movie> }) {
  return <MoviePreview movie={hit} />;
}

export default function Search() {
  const { refresh } = useContext(SearchContext);

  return (
    <Box sx={{ minWidth: "100%" }}>
      <InstantSearch
        searchClient={searchClient}
        indexName="movies"
        refresh={refresh}
      >
        <SearchBox autoFocus showLoadingIndicator />
        <Box>
          <InfiniteHits hitComponent={MovieHit} />
        </Box>
      </InstantSearch>
      <Fab variant="extended" color="primary" aria-label="add">
        <PlusOne sx={{ position: "fixed" }} />
        Extended
      </Fab>
    </Box>
  );
}
