
import { CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';

interface ImageWithPlaceholderProps {
    src?: string;
    alt?: string;
    height?: number;
}


export default function ImageWithPlaceholder({ src, alt, height }:ImageWithPlaceholderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!src) {
            setIsLoading(false);
            setIsError(true);
        } else {
            setIsLoading(true);
            const image = new Image();
            image.src = src;
            image.onload = () => {
                setIsError(false);
                setIsLoading(false);
            }
            image.onerror = () => {
                setIsLoading(false);
                setIsError(true);
            }
        }
    }, [src]);

    return (
        <div>
            {isLoading && <CircularProgress />}
            {!isLoading && !isError && <img height={height} src={src} alt={alt} />}
            {isError && <img height={height} src="/img-not-found.png" alt="invalid url"/>}
        </div>
    )
}
