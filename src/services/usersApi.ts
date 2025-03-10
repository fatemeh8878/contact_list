import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: string;
  name: string;
  avatar: string;
  isFavorite: boolean;
  createdAt: string;
  search: string;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67c82dad0acf98d070854ab8.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
