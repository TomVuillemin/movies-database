import { Accordion,AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import {  Edit } from "@mui/icons-material";
import MovieEdition from './MovieEdition';
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import Movie from '../model/Movie';


export default function MoviePreview({ movie }: { movie: Movie }) {

    return (
        <Accordion style={{width:"100%"}} TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<Edit />}>                
                <ImageWithPlaceholder src={movie.image} alt={movie.title} height={70} />
                <Typography variant="h6" sx={{marginLeft:1}} >{movie.title}</Typography>
                
            </AccordionSummary>
            <AccordionDetails >
            <MovieEdition
                movie={movie}
                />
            </AccordionDetails>
        </Accordion>
    );
}