import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import {Home,Root,SingleMovieDetail} from './allAssets'

import { loader } from "./Pages/Home"
import { movieDatailLoader } from "./Pages/SingleMovieDetail"



// creater Router 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} loader={loader}/>
    <Route path='/detail/:imdbId' element={<SingleMovieDetail />} loader={movieDatailLoader}/>
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App