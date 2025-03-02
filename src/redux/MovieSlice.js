import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    imdbIds: {},  // Store IMDb IDs here
    query: "",
    genre: "",
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setIMDbIds: (state, action) => {
      state.imdbIds = { ...state.imdbIds, ...action.payload }; // Merge new IMDb IDs
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setMovies, setIMDbIds, setGenre, setQuery } = movieSlice.actions;
export default movieSlice.reducer;
