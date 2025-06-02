import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <ul className="movie-list">
          {movies.map(({ title, year, director }, index) => (
            <li key={index} className="movie-item">
              <h2 className="movie-title">{title}</h2>
              <div className="movie-descr">
                <p className="movie-year">({year})</p>
                <span>-</span>
                <p className="movie-director">{director}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
