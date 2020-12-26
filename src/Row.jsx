import { useState, useEffect } from "react";
import axios from "./axios";
import { fetchTrending } from "./request";

const Row = () => {
  const [movies, setMovies] = useState([]);
  const baseUrlImage= "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await axios.get(fetchTrending);

      return setMovies(results);
    };
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {movies.map((item, i) => (
        <div key = {i} >
          <h1>{item.title}</h1>
          <img src={baseUrlImage + item.poster_path} alt={item.title}/>
        </div>
      ))}
    </div>
  );
};

export default Row;
