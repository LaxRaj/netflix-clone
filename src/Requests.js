// make it a dotenv and the nsave it in their

const API_KEY = "70d27f525f9c12112d7eb398dd6c949c";

const requests = {
 fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
 fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
 fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//  Figure out the link/url for the docuentaries; this one does not work for it 
 fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests ;