import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = []; // Start with an empty array of favorite IDs

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.includes(id)) {
        // If already in favorites, remove it
        return state.filter((favId) => favId !== id);
      } else {
        // If not in favorites, add it
        return [...state, id];
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
