import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllMovies = async () => {
    setLoading(true);
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const moviesData = await response.json();
    setMovies(moviesData.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div>
      <h1>My Movie App</h1>
      {loading ? (
        <p>Please wait...</p>
      ) : (
        <div className="movie_list">
          {movies?.map((movie, key) => (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <img src={movie.medium_cover_image} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
