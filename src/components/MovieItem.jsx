// MovieItem displays one movie
export default function MovieItem(props) {
    return (
        <div>
            {/* Display the movie title */}
            <h3>{props.mymovie.Title}</h3>

            {/* Display the movie year */}
            <p>{props.mymovie.Year}</p>

            {/* Display the movie poster */}
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} />

        </div>
    )
}