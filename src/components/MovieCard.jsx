

export default function MovieCard({ title, image, desc, IMDB }) {
  return (
    <div className="w-[240px] h-[450x] border border-gray-700 rounded-lg shadow-lg bg-gray-900 text-white overflow-hidden transition-transform transform hover:scale-105 mt-4 mb-4">
      
      {/* Movie Poster */}
      <div className="relative w-full h-[65%]">
        <img 
          src={image} 
          alt={title || "Movie poster"} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Movie Details */}
      <div className="p-3">
        <h5 className="text-lg font-bold truncate">{title || "Untitled Movie"}</h5>
        <p className="text-gray-400 text-sm line-clamp-5">{desc || "No description available."}</p>
      </div>

      {/* IMDb Button */}
      <div className="px-3 pb-3 text-center">
        <a 
          href={IMDB} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white w-full py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Take Me to IMDb
        </a>
      </div>
      
    </div>
  );
}
