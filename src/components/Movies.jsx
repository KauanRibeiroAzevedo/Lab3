import MovieItem from "./MovieItem";

// Movies receives the movie list through props
export default function Movies(props){

    // Loop through each movie in the array
    return props.movies.map(
        (movie)=>{

            // Send each movie to the MovieItem component
            return <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem>
        }
    );
}