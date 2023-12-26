import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

export const movieDatailLoader = async(args)=>{
  const imdbID = args.params.imdbId;
  const URL = `https://www.omdbapi.com/?i=${imdbID}&plot=full&apiKey=${import.meta.env.VITE_OMDB_API_KEY}`
  try {
    const resp = await axios.get(URL);
    return {movieData : resp.data, isError: null, error: ""}
  } catch (error) {
    const errorMessage = error.message || error.resp.data.Error || "Something went wrong";
    return {movieData : null, isError: true, error: errorMessage}
  }
}
const SingleMovieDetail = () => {
  const { movieData, isError, error } = useLoaderData();

  if (movieData && movieData.Response === "False") {
    return <h1>{movieData.Error}</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }


  const { Title, Year, imdbID, Type, Poster,Released,Runtime,Language,Awards,Genre,Plot,Actors,Country,Director,imdbVotes,
    imdbRating,BoxOffice,Metascore,Rated} = movieData

  return (
    <>
    <div className="md:flex justify-between md:mt-5">
      <div className="left md:w-[30%] lg:w-[30%]">
        <h2 className="font-semibold text-lg lg:text-2xl text-center md:text-center py-2">{Title}</h2>
        <img src={Poster} className="shadow-xl" />
        <div className="info mt-2">
          <span className="font-semibold text-blue-600">Release Date - </span>
          <span>{Released}.</span>
        </div>
        <div className="mt-2">
          <span className="font-semibold text-blue-600">Language - </span>
          <span>{Language}.</span>
        </div>
        
      </div>


      <div className="Rigth  md:w-[65%] lg:w-[70%] md:pt-7 mt-4">
        <div className='py-2'>
          <span className="font-semibold text-blue-600">Plot - </span>
          <span>{Plot}</span>
        </div>
        <div className="mt-2">
          <span className="font-semibold text-blue-600">Awards - </span>
          <span>{Awards}.</span>
        </div>
        <div className='mt-2'>
          <span className="font-semibold text-blue-600">Actors - </span>
          <span>{Actors}.</span>
        </div>
        <div className='mt-2'>
          <span className="font-semibold text-blue-600">Country - </span>
          <span>{Country}.</span>
        </div>
        
        <div className="mt-2">
          <span className="font-semibold text-blue-600">Genre - </span>
          <span>{Genre}.</span>
        </div>
        <div className="mt-2">
          <span className="font-semibold text-blue-600">Runtime - </span>
          <span>{Runtime}.</span>
        </div>


        <h2 className="text-2xl my-4">More Info...</h2>

        <div className='mt-2'>
          <span className="font-semibold text-blue-600">Director - </span>
          <span>{Director}.</span>
        </div>
        <div className='mt-2'>
          <span className="font-semibold text-blue-600">imdb-Rating - </span>
          <span>{imdbRating}.</span>
        </div>
        <div className='mt-2'>
          <span className="font-semibold text-blue-600">imdb-Votes - </span>
          <span>{imdbVotes}.</span>
        </div>
        <div className='mt-2'>
          <span className="font-semibold text-blue-600">BoxOffice - </span>
          <span>{BoxOffice}.</span>
        </div>
        <div className='mt-2'>
          <span className="font-semibold text-blue-600">Metascore - </span>
          <span>{Metascore}.</span>
        </div>
        <div className='mt-2'>
          <span className="font-semibold text-blue-600">Rated - </span>
          <span>{Rated}.</span>
        </div>
      </div>



    </div>
    </>
  )
}

export default SingleMovieDetail
