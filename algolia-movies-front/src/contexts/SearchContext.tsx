
import { createContext, useState, useEffect } from 'react';

interface SearchContextProps {
    triggerRefresh: () => void;
    refresh:boolean;
}

export const SearchContext = createContext<SearchContextProps>({
    refresh:false,
    triggerRefresh:()=>{},
});

export const SearchProvider = ({children}:{children:any}) => {
    const [refresh,setRefresh] = useState(false);
    const triggerRefresh = ()=>{
        setRefresh(true);
    }
    
    useEffect(() => {
        if (refresh) {
          setRefresh(false);
        }
      }, [refresh]);

    return (
        <SearchContext.Provider value={{refresh,triggerRefresh}}>
            {children}
        </SearchContext.Provider>
    )
}
