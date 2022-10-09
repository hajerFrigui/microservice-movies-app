import React, { useState} from "react";
import ReactDOM from 'react-dom';

import "../../css/Movie.css";

const Image = ({ title, src, description, genre }) => (
  <div className="image--container">
    <div className="image--face image--front">
      <img className="image--img" src={src} alt="img" />
    </div>
    <div className="image--face image--back">
      <h3 className="image--title">{title}</h3>
      <h6 className="image--genre">{genre}</h6>
      <p className="image--desc">{description}</p>
    </div>
  </div>
);

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    await axios
      .get("/movies")
      .then((res) => setMovies(res.data));
  };

  const getHorrorMovies = async () => {
    // console.log("i am hereeeeeeeeee from horror");
    // // console.log("horrorMovies :", process.env.HORROR_MOVIES_CONTAINER);
    // console.log("horrorMovies :", process.env.HORROR_MOVIES_CONTAINER);
    // console.log(process.env.HORROR_MOVIES_CONTAINER);
    await axios
      .get('/HorrorMovies')
      .then((res) => setMovies(res.data));
  };


  const getActionMovies = async () => {

    console.log("actionMovies :", process.env.ACTION_MOVIES_CONTAINER);
    await axios
      .get("/ActionMovies")
      .then((res) => setMovies(res.data)).catch((error)=>console.log(error));
  };
  return (
    <div className="App">
      <button className="btn" onClick={() => getAllMovies()}>
        All Movies
      </button>
      <button className="btn" onClick={() => getHorrorMovies()}>
        Horror Movies
      </button>
      <button className="btn" onClick={() => getActionMovies()}>
        Action Movies
      </button>
      <div className="App-grid">
        {movies.length
          ? movies.map((movie) => <Image key={movie.id} {...movie} />)
          : "No Movies "}
      </div>
    </div>
  );
}
if (document.getElementById('movies')) {
    ReactDOM.render(<Movies />, document.getElementById('movies'));
}