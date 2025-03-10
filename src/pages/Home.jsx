import MovieCard  from "../components/MovieCard"
import {useState} from "react";
function Home(){

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id:1, title: "john wick", release_date: "2014"},
        {id:2, title: "joe the legend", release_date: "2002"},
        {id:3, title: "Matrix", release_date: "1999"},
        {id:4, title: "Dudson", release_date: "1980"},
        {id:5, title: "Carbon eliminator", release_date: "1890"}
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
      <div classname="Home">
        <form onSubmit={handleSearch} classname="search-form">
          <input
            type="text"
            placeholder="input-search"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
          <button type="submit" classname="search-button">
            Search
          </button>
        </form>

        <div className="Movies-grid">
          {movies.map((movie) => 
            movie.title.toLowerCase().startsWith(searchQuery) && (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
}

export default Home;