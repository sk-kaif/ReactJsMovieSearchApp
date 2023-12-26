import { useLoaderData } from "react-router-dom";
import MovieLists from "../components/MovieLists"
import SearchFrom from '../components/SearchFrom'
import axios from "axios";

export async function loader({request}){
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || 'fight';

  try {
    const endPiont = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${search}`
    const resp = await axios.get(endPiont)
    return {movieResponse : resp.data, search , isError: false, error: ""};
  } catch (error) {
    return {movieResponse : null, search , isError: true, error: ""};
  }
}


const Home = () => {
  const data = useLoaderData()
  return (
    <div className="max-w-6xl mx-auto">
      <SearchFrom searchTrem={data.search}/>
      <MovieLists data={data}/>
    </div>
  )
}

export default Home