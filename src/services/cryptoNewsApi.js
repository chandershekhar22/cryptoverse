import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the headers with your RapidAPI key and host
const cryptoNewsHeaders = {
    'x-rapidapi-key': 'd451661273msh1b8bbb8f6f3c6e5p1654a4jsn30ae25d223f0',
    'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
};

// Set the base URL for the API
const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1';

// Create a request function that attaches the headers
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// Set up the cryptoNewsApi slice using createApi
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            // The new API endpoint doesn't accept query parameters for specific categories/counts,
            // so we simply call the cryptodaily endpoint.
            query: () => createRequest('/cryptodaily'),
        }),
    }),
});

// Export the auto-generated hook to use the query in your components
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
