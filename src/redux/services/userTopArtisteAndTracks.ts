import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { accessToken } from '../../utils/getAccessToken';
import { spotify_base_url } from '../../config';
import { userTopArtistAndTrackParams } from './params';

export const userTopArtistAndTracksApi = createApi({
    reducerPath: 'userTopArtistAndTracksApi',

    // The base URL for the API.
    baseQuery: fetchBaseQuery({
        baseUrl: `${spotify_base_url}/me/top/artists?${userTopArtistAndTrackParams}`,
        prepareHeaders: (headers, { getState }) => {
            headers.set(
                'Authorization',
                `Bearer ${accessToken}`,
            )
            return headers
        }
    }),
    endpoints: (builder) => ({
        getUserTopArtistAndTracks: builder.query<any[], void>({
            query: () => '',
        })
    })
});

export const { useGetUserTopArtistAndTracksQuery } = userTopArtistAndTracksApi;