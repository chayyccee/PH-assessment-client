import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { accessToken } from '../../utils/getAccessToken';
import { spotify_base_url } from '../../config';
import { featuredPlaylistsParams } from './params';

export const featuredPlaylists = createApi({
    reducerPath: 'featuredPlaylists',

    // The base URL for the API.
    baseQuery: fetchBaseQuery({
        baseUrl: `${spotify_base_url}/browse/featured-playlists?${featuredPlaylistsParams}`,
        prepareHeaders: (headers, { getState }) => {
            headers.set(
                'Authorization',
                `Bearer ${accessToken}`,
            )
            return headers
        }
    }),
    endpoints: (builder) => ({
        getFeaturedPlaylists: builder.query<any[], void>({
            query: () => '',
        })
    })
});

export const { useGetFeaturedPlaylistsQuery } = featuredPlaylists;
