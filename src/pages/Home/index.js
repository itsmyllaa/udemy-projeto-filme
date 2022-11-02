import { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

//URL DA API: https://api.themoviedb.org/3/movie/550?api_key=d863cabd141f4c3080830779ca8a5b1d

function Home(){
const [filmes, setFilmes] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() =>{

    async function loadFilmes(){
    const response = await api.get("movie/now_playing", {
        params:{
            api_key: 'd863cabd141f4c3080830779ca8a5b1d',
            language: "pt-BR",
            page: 1,
        }
    })   
        //console.log(response.data.results.slice(0,10));  
        setFilmes(response.data.results.slice(0,10))
        setLoading (false);
    }

    loadFilmes();

}, [])

    if(loading){
        return(
            <div className='loading'>Carregando filmes...</div>
        )
    }

    return(
    <div className='container'>
       <div className='lista-filmes'>
            {filmes.map((filme) => {
                return(
                    <article key={filme.id}>
                        <br/>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt= {filme.title}/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                )
            })}
       </div>
    </div>
    )
}

export default Home;