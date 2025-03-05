import MovieCard  from "../components/MovieCard"

function Home(){
    const movies = [
        {id:1, title: "john wick", release_date: "2014"},
        {id:2, title: "joe the legend", release_date: "2002"},
        {id:3, title: "Matrix", release_date: "1999"},
        {id:4, title: "Dudson", release_date: "1980"},
        {id:5, title: "Carbon eliminator", release_date: "1890"}
    ]

    return(
        <div classname="Home">
            <div className="Movies-grid">
            {movies.map(movie => (
                <MovieCard movie = {movie} key={movie.id}/>
            ))}
        </div>
        </div>
    )
}

export default Home;