import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Update the User interface to match the response data structure
interface User {
  id: string; // The id is a string (not a number as in the previous example)
  name: string;
  avatar: string;
  isFavorite: boolean;
  createdAt: string; // Date string format
  search: string; // Added 'search' field from the response
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67c82dad0acf98d070854ab8.mockapi.io/api/v1", // Updated base URL
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users", // Adjusted to the correct endpoint
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
