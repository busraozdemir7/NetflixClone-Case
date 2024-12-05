import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { DetailType, BodyType, ResType } from "../types";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
    },
  }),

  tagTypes: ["Movies", "Favorites"],

  endpoints: (builder) => ({
    getMovies: builder.query<ResType, string>({
      query: (url) => url,
    }),

    getDetail: builder.query<DetailType, string | undefined>({
      query: (id) => `/movie/${id}`,
    }),

    addToFavorite: builder.mutation<string, BodyType>({
      query: (body: BodyType) => ({
        url: `/account/${import.meta.env.VITE_USER_ID}/favorite`,
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["Favorites"],
    }),

    getFavorites: builder.query<ResType, void>({
      query: () => `/account/${import.meta.env.VITE_USER_ID}/favorite/movies`,
      providesTags: ["Favorites"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetDetailQuery,
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
} = api;
