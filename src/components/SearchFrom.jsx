import { Form } from "react-router-dom"

const SearchFrom = () => {
  return (
    <Form className="flex justify-between items-center shadow-md mt-4 mb-8">
      <input type="text" name="search" placeholder="type..." required autoComplete="off" className="broder-none focus:outline-none w-full rounded-l-sm md:p-2 p-1 dark:text-black"/>
      <button type="submit" className="bg-blue-600 md:px-3 md:py-2 p-1 rounded-r-sm md:font-semibold">Search</button>
    </Form>
  )
}

export default SearchFrom