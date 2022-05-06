import { configureStore } from "@reduxjs/toolkit";
import { newReleasesApi } from "../services/newReleasesApi";
import { userTopArtistAndTracksApi } from "../services/userTopArtisteAndTracks";
import { featuredPlaylists } from "../services/featuredPlaylists";
import { addToLibraryApi } from "../services/addToLibraryApi";

export const store = configureStore({
    reducer: {
        // reducer
        [newReleasesApi.reducerPath]: newReleasesApi.reducer,
        [userTopArtistAndTracksApi.reducerPath]: userTopArtistAndTracksApi.reducer,
        [featuredPlaylists.reducerPath]: featuredPlaylists.reducer,
        [addToLibraryApi.reducerPath]: addToLibraryApi.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(
            // middleware
            newReleasesApi.middleware,
            userTopArtistAndTracksApi.middleware,
            featuredPlaylists.middleware,
            addToLibraryApi.middleware,
        )
    ),
    devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;