const fetchTrending = `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`;
const fetchNetflixOriginals = `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`;
const fetchTopRated = `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
const fetchActionMovies = `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=28`;
const fetchComedyMovies = `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=35`;
const fetchHorrorMovies = `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=27`;
const fetchRomanceMovies = `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=10749`;
const fetchDocumentaries = `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=99`;

export {
  fetchTrending,
  fetchNetflixOriginals,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
};
