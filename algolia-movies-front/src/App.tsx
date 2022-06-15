import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./routes/Search";
import MovieEdition from "./routes/MovieEdition";
import { Typography, Box } from "@mui/material";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Typography variant="h1" color={"primary"}>
          Movies database
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="new" element={<MovieEdition />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </SearchProvider>
    </div>
  );
}

export default App;
