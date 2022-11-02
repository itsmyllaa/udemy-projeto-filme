import axios from 'axios';

//BASE DA URL: https://api.themoviedb.org/3
//URL DA API: https://api.themoviedb.org/3/movie/550?api_key=d863cabd141f4c3080830779ca8a5b1d

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;