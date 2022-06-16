import Movie, { movieSchema } from "../model/Movie";
import {
  Button,
  Chip,
  CircularProgress,
  Grid,
  IconButton,
  MenuItem,
  OutlinedInput,
  Paper,
  Rating,
  Select,
  TextField,
  Typography,
  Box,
  ListItemText,
  Checkbox,
  InputLabel,
  FormControl,
} from "@mui/material";
import { FieldArray, FormikProvider, useFormik } from "formik";
import Add from "@mui/icons-material/Add";
import { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Delete, DeleteForever, Save } from "@mui/icons-material";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import MoviesApiClient from "../MoviesApiClient";
import { useNavigate } from "react-router-dom";
import GENRES from "../model/GenresEnum";

export default function MovieEdition({ movie }: { movie?: Movie }) {
  const [loading, setLoading] = useState(false);
  const { triggerRefresh } = useContext(SearchContext);

  const isCreation = movie === undefined;

  const navigate = useNavigate();

  const deleteMovie = () => {
    if (!isCreation) {
      setLoading(true);
      MoviesApiClient.deleteMovie(movie)
        .then(() => {
          triggerRefresh();
        })
        .catch((error) => {
          //TODO : display snackbar
          console.log("error during delete", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const initialMovie = movie || {
    title: "",
    rating: 0,
    alternative_titles: [],
    year: undefined,
    image: undefined,
    color: "red",
    score: undefined,
    genre: [],
    objectID: undefined,
  };
  const formik = useFormik({
    initialValues: initialMovie,
    validationSchema: movieSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        if (isCreation) {
          await MoviesApiClient.createMovie(values as Movie);
          triggerRefresh();
          navigate("/");
        } else {
          await MoviesApiClient.updateMovie(values as Movie);
          triggerRefresh();
          setLoading(false);
        }
      } catch (error) {
        //TODO : display snackbar
        console.log("error during call", error);
      }
    },
  });

  return (
    <Paper
      component="form"
      sx={{ padding: 2 }}
      elevation={2}
      onSubmit={formik.handleSubmit}
    >
      <FormikProvider value={formik}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="genres-label">Genre</InputLabel>
              <Select
                labelId="genres-label"
                id="genres"
                fullWidth
                multiple
                value={formik.values.genre}
                onChange={formik.handleChange}
                name="genre"
                input={<OutlinedInput id="genres" label="Genre" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {GENRES.sort().map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    <Checkbox
                      checked={
                        (formik.values.genre as string[]).indexOf(genre) > -1
                      }
                    />
                    <ListItemText primary={genre} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="rating"
              value={formik.values.rating}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              fullWidth
              label="score"
              name="score"
              value={formik.values.score?.toFixed(4)}
              onChange={formik.handleChange}
              error={formik.touched.score && Boolean(formik.errors.score)}
              helperText={formik.touched.score && formik.errors.score}
              type="number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="image url"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              error={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
            />
            <ImageWithPlaceholder src={formik.values.image} height={300} />
          </Grid>

          <Grid item xs={12} md={4}>
            <FieldArray
              name="alternative_titles"
              render={(arrayHelpers) => (
                <div>
                  <Typography component="legend" align="left">
                    Alternatives titles
                    <Button>
                      <Add onClick={() => arrayHelpers.push("")} />
                    </Button>
                  </Typography>
                  {formik.values.alternative_titles &&
                  formik.values.alternative_titles.length > 0
                    ? formik.values.alternative_titles.map((title, index) => (
                        <div key={index}>
                          <TextField
                            style={{ width: "80%", marginBottom: "10px" }}
                            label={`alternative title ${index + 1}`}
                            name={`alternative_titles.${index}`}
                            value={title}
                            onChange={formik.handleChange}
                          />
                          <IconButton
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <Delete />
                          </IconButton>
                        </div>
                      ))
                    : null}
                </div>
              )}
            />
          </Grid>

          <Grid item xs={12}>
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                <Button type="submit" startIcon={<Save />}>
                  Save
                </Button>
                {!isCreation && (
                  <Button
                    color="error"
                    onClick={deleteMovie}
                    startIcon={<DeleteForever />}
                  >
                    Delete
                  </Button>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </FormikProvider>
    </Paper>
  );
}
