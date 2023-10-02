import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/",
  }),
  endpoints: (builder) => ({
    fetchPlayers: builder.query({
      query: () => `players`,
    }),
    fetchSinglePlayer: builder.query({
      query: (playerId) => `players/${playerId}`
    }),
  }),
});

export const { useFetchPlayersQuery, useFetchSinglePlayerQuery } = puppyBowlApi;

export default puppyBowlApi;