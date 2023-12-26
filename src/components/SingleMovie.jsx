import { Link } from 'react-router-dom'

const SingleMovie = ({ Title, Year, imdbID, Poster }) => {
  return (
    <Link to={`/detail/${imdbID}`} >
     <div className='mb-9 lg:my-7 shadow-xl bg-blue-600 rounded'>
        <div className='w-full h-[450px]'>
          <img src={
            Poster === "N/A"
            ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQs2Y6KaCvvRLfhhULXsrwHaLD%26pid%3DApi&f=1&ipt=77720d684ff9f868dc3ec3a79eac87430c1b297981428b95dde9647b5935ec49&ipo=images"
            : Poster
          } className='w-full h-full' />
        </div>
        <h2 className='font-bold text-center md:text-2xl px-2 whitespace-nowrap overflow-hidden text-ellipsis mt-2'>{Title}</h2>
        <h4 className='font-semibold text-center md:text-lg pb-2'>{Year}</h4>
      </div>
    </Link>
  )
}

export default SingleMovie