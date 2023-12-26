import SingleMovie from "./SingleMovie";

const MovieLists = ({data}) => {
  const { movieResponse, error, isError } = data;

  if (isError) {
    return <h1>{error}</h1>;
  }

  if (movieResponse && movieResponse.Response === "False") {
    return <h1>{movieResponse.error || "No results found"}</h1>;
  }

  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12">
      {movieResponse.Search.map((movie) => {
        return <SingleMovie key={movie.imdbID} {...movie} />;
      })}
    </div>
  )
}

export default MovieLists