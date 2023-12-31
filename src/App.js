import { useState, useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
// 382368c8
const API_URL = 'http://www.omdbapi.com?apikey=382368c8'
const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        if(data.Response)
            setMovies(data.Search)
        else{
            setMovies([])
        }
    }
    const movie1 = {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    }
    useEffect(() => {
        searchMovies('Spiderman')
    }, [])
    useEffect(() => {
        console.log(searchTerm)
    }, [searchTerm])
    return (
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value) }}
                />
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />

            </div>
            {
                (movies) ? (
                    <div className="container">
                        {movies.map((movie) => (<MovieCard movie1={movie} />))}
                    </div>
                )
                    : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    )
}

export default App;