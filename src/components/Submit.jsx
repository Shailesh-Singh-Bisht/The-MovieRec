export default function Submit({ onSubmit }) {
  return (
    <button
      onClick={onSubmit}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md 
                 hover:bg-blue-700 transition"
    >
      Search Movies
    </button>
  );
}
