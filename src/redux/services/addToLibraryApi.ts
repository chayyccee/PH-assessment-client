import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { accessToken } from '../../utils/getAccessToken';
import { baseurl } from '../../config';
import { getUser } from '../../utils/getCurrentUser';

const data = getUser();
// console.log(data);

/*interface albumData {
    album_id: string;
        image_url: string;
        album_name: string; 
        artist_name: string;
        album_release_date: string;
        ${(data as any).id}
}*/

export const addToLibraryApi = createApi({
    reducerPath: 'addToLibraryApi',

// The base URL for the API.
baseQuery: fetchBaseQuery({
    baseUrl: `${baseurl}/`,
    prepareHeaders: (headers, { getState }) => {
        headers.set(
            'Authorization',
            `Bearer ${accessToken}`,
        )
        return headers
    },
}),
endpoints: (builder) => ({
    addedToLibrary: builder.mutation({
        query: ({id, libraryData}) => ({
            method: 'POST',
            url: `${(data as any).id}`,
            body: {libraryData},
        }),
    })
})
});

export const { useAddedToLibraryMutation } = addToLibraryApi;
