import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import GenreSelector from "../components/GenreSelector";
import Grid from "../components/Grid";
import Submit from "../components/Submit";
import { setMovies, setQuery, setGenre } from "../redux/MovieSlice";
import { API_key, Auth_key } from "../api/API"; // Import API keys

export default function Home() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.movies.query);
  const selectedGenre = useSelector((state) => state.movies.genre);
  const [loading, setLoading] = useState(false); // Loading state

  const fetchMovies = async () => {
    if (!query.trim() && !selectedGenre) return; // Prevent unnecessary API calls

    let url = `https://api.themoviedb.org/3/${query ? "search" : "discover"}/movie`;
    let queryParams = [`api_key=${API_key}`, "language=en-US", "page=1"];

    if (query) queryParams.push(`query=${query}`);
    if (selectedGenre) queryParams.push(`with_genres=${selectedGenre}`);

    try {
      setLoading(true);
      const response = await fetch(`${url}?${queryParams.join("&")}`, {
        headers: {
          Authorization: Auth_key, 
          accept: "application/json"
        },
      });

      const data = await response.json();
      if (data.results) {
        const randomMovies = data.results.sort(() => 0.5 - Math.random()).slice(0, 10);
        dispatch(setMovies(randomMovies));
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <Search onSearch={(value) => dispatch(setQuery(value))} />
      <GenreSelector onGenreSelect={(value) => dispatch(setGenre(value))} />
      <Submit onSubmit={fetchMovies} />
      {loading ? <p className="text-white">Loading...</p> : <Grid />}
    </div>
  );
}
