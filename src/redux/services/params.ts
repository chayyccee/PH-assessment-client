const country: string = 'NG';
const limit: number = 50;
const offset: number = 0;
const time_range: string = 'short_term';
const type = ['album', 'playlist'].join("");


export const params = new URLSearchParams(
    `country=${country}&offset=${offset}&limit=${limit}`
).toString();

export const userTopArtistAndTrackParams = new URLSearchParams(
    `time_range=${time_range}&limit=${limit}`
).toString();

export const featuredPlaylistsParams = new URLSearchParams(
    `country=${country}&offset=${offset}&limit=${limit}`
).toString();

export const searchParams = new URLSearchParams(
    `&type=${type}&limit=${limit}&offset=${offset}`
).toString();
