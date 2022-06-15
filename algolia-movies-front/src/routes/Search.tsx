import algoliasearch from "algoliasearch";
import { useContext } from "react";
import {
  InstantSearch,
  SearchBox,
  InfiniteHits,
  RefinementList,
  RatingMenu,
} from "react-instantsearch-dom";
import { Box, Fab } from "@mui/material";
import MoviePreview from "./MoviePreview";
import { SearchContext } from "../contexts/SearchContext";
import { Hit } from "react-instantsearch-core";
import Movie from "../model/Movie";
import { PlusOne } from "@mui/icons-material";

const searchClient = algoliasearch(
  "D4B9WWS9EK",
  "d2216d0ff431e257158fae27a638ff0e"
);

function MovieHit({ hit }: { hit: Hit<Movie> }) {
  return <MoviePreview movie={hit} />;
}

export default function Search() {
  const { refresh } = useContext(SearchContext);

  return (
    <Box sx={{ minWidth: "100%" }}>
      <Box sx={{ mx: 20 }}>
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
      </Box>
      <Fab variant="extended" color="primary" aria-label="add">
        <PlusOne sx={{ position: "fixed" }} />
        Extended
      </Fab>
    </Box>
  );
}
