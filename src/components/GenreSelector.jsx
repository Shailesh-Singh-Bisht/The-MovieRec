import { useEffect, useState } from "react";
import {Auth_key} from "../api/API";

const GenreSelector = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: Auth_key,
      },
    })
      .then((res) => res.json())
      .then((json) => setGenres(json.genres || []))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  return (
    <select
      onChange={(e) => onGenreSelect(e.target.value)}
      className="p-2 border border-gray-600 rounded-lg shadow-md bg-white text-gray-700 
                 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-500 
                 transition ease-in-out"
    >
      <option value="">Select Genre</option>
      {genres.length > 0 ? (
        genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))
      ) : (
        <option disabled>Loading...</option>
      )}
    </select>
  );
};

export default GenreSelector;
