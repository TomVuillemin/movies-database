import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Search from "./routes/Search";
import MovieEdition from "./routes/MovieEdition";
import { Typography, Box, Button } from "@mui/material";
import { SearchProvider } from "./contexts/SearchContext";
import { Add } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchProvider>
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h1" color={"primary"}>
                Movies database
              </Typography>
            </Link>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="new" element={<MovieEdition />} />
            </Routes>
          </Box>
        </SearchProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
