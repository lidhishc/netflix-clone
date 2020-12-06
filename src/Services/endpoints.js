const API_V3 = "2097fbfc8bc64540593a3ef22c213ba6"


const requests = {
    fetchActionMovies: `/discover/movie?api_key=${API_V3}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_V3}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_V3}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_V3}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_V3}&with_genres=99`,
    fetchTrending: `/trending/movie/week?api_key=${API_V3}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_V3}&with_networks=213`,
}

export default requests; 
