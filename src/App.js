import  React from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard  from './MovieCard'
import { useEffect ,useState } from 'react'

// d423ebd0
const API_URL  = 'http://www.omdbapi.com?apikey=d423ebd0'

// const movie1 = {
//     "Title": "Amazing Spiderman Syndrome",
//     "Year": "2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "N/A"
// }

const App =()=>{
    const [movies, setMovies] = useState()
    const [searchTerm, setSearchTerm] = useState('')

const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)

    const data  = await response.json()
    setMovies(data.Search)
}

    useEffect(()=>{
        searchMovies('Spiderman')
    }, [])

    return(
        <div className='app'>
            <h1>Binge</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='Search'
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 
                ? (
                    <div className = 'container'>
                        {movies.map((movie)=>(
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>No movies found</div>
                )
            }

        </div>
    )
}

export default App

