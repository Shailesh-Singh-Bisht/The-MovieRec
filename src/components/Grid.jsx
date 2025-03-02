import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import { API_key, Auth_key } from "../api/API";
import { setIMDbIds } from "../redux/MovieSlice"; // Import the Redux action

export default function Grid() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies); // Get movies from Redux store
  const imdbIds = useSelector((state) => state.movies.imdbIds); // Get IMDb IDs

  useEffect(() => {
    if (movies.length === 0) return; // No movies to fetch IMDb IDs for

    const fetchIMDbIds = async () => {
      const imdbMap = {};

      try {
        await Promise.all(
          movies.map(async (movie) => {
            const url = `https://api.themoviedb.org/3/movie/${movie.id}/external_ids?api_key=${API_key}`;
            const response = await fetch(url, {
              headers: { Authorization: Auth_key, accept: "application/json" },
            });
            const data = await response.json();

            imdbMap[movie.id] = data.imdb_id
              ? `https://www.imdb.com/title/${data.imdb_id}/`
              : "#";
          })
        );

        dispatch(setIMDbIds(imdbMap)); // Store IMDb IDs in Redux
      } catch (error) {
        console.error("Error fetching IMDb IDs:", error);
      }
    };

    fetchIMDbIds();
  }, [movies, dispatch]); // Fetch when movies change

  return (
    <div className="mt-6 mb-6 mr-4 ml-4 px-4 w-full h-full bg-transparent rounded-xl border-2 border-gray-600">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/200"}
              desc={movie.overview || "No description available."}
              IMDB={imdbIds[movie.id] || "#"}
            />
          ))
        ) : (
          <p className="text-white text-lg">No Movies Found</p>
        )}
      </div>
    </div>
  );
}
