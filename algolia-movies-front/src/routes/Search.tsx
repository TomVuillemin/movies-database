import algoliasearch from "algoliasearch";
import { useEffect, useState } from "react";
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom";

const searchClient = algoliasearch('D4B9WWS9EK', 'd2216d0ff431e257158fae27a638ff0e');

function Hit({ hit }: { hit: any }) {
  return <div style={{backgroundColor:hit.color}} >
    {hit.image? <img src={hit.image} alt={`${hit.title}`} />: null}
    <p>{hit.name}</p></div>;
}

export default function Search() {

    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
      if (refresh) {
        setRefresh(false);
      }
    }, [refresh]);
  
    const refreshClick = () => {
      setRefresh(true)
    }

    return (
        <div>
        <InstantSearch searchClient={searchClient} indexName="movies" refresh={refresh} >
        <SearchBox />
        <Hits hitComponent={Hit} />
  
      </InstantSearch>
  
      <button onClick={refreshClick}>Refresh</button>
      </div>
    )
    
}