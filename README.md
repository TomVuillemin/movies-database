# Algolia movies Database

This project contains a small application built following the specification of Algolia [full-stack test](https://gist.github.com/bodinsamuel/f7a5439bc98aa3433b08917b074e6a74).

## Architecture

The backend of the API is built with Spring Boot. The code can be found on the `api/` folder. This backend uses MongoDB as a database.

The frontend is built with react.

![movies database architecture](https://user-images.githubusercontent.com/6486951/173956984-106cbc63-50e7-4150-8a18-b554dd2e27ad.png)

## Launch

The easiest way to launch the full setup is using Docker. A docker-compose.yml file is provided that should allow you to launch a working setup.
You will need to setup the correct env variables.

1. Edit `.env` files to set the correct values for algolia application keys
   - Inside the front folder : [.env](./algolia-movies-front/.env)
   - At the root for the backend : [.env](./.env)
2. Launch `docker-compose up -d --build` . This will launch the db, the api and the frontend
3. You should be able to access :
   - the frontend of the api on [http://localhost](http://localhost)
   - The doc of the api on [http://localhost:3333/swagger-ui/index.html](http://localhost:3333/swagger-ui/index.html). You can use this to start adding movies to the database

## Future improvements

## Do not block everything until indexing is performed

At the moment, for every modification/creation/delete operation, we wait until the indexing is performed to unblock the UI. This is clearly not the best solution UX-wise and should be improved. One solution would be to perform optimistic update on the frontend to allow the user to keep using the app, and then perform the refresh once the indexing is finished.

## Retrieve Algolia application information from the backend

At the moment, these informations are hardcoded in the frontend and cannot be changed once built. This should be improved and these configurations should be retrieved from the backend.

## Adds tests on the backend

The backend does not contain any test. This is something that should be added. Integration tests seems appropriate since we do not have any complex algorithm, but would like to validate the overall behaviour of our api.
