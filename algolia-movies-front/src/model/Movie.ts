
import * as yup from 'yup';

export const movieSchema = yup.object({
    objectID: yup.string().notRequired(),
    title: yup.string().required(),
    alternative_titles: yup.array().of(
            yup.string()
        ).required(),
    year: yup.number().required(),
    image: yup.string().url(),
    color: yup.string().required(),
    rating : yup.number().required(),
    score : yup.number().required().min(0).max(10),
    genre : yup.array().of(yup.string()).required(),
});

export default interface Movie extends yup.Asserts<typeof movieSchema> {}
