import { useState, useEffect } from 'react'
import { getCatsBreeds } from '../utils/api'
import LoadingIndicator from './LoadingIndicator'
import HeaderButtonGroup from './HeaderButtonGroup'



const FuncCats = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [breeds, setBreeds] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true)
      const breedsData = await getCatsBreeds(currentPage)

      setBreeds((prev) => [...prev, ...breedsData])
      setIsLoading(false)

    }

    fetchData()

  }, [currentPage])

  const handlePreviousPage = () => {
    if (currentPage <= 1) {
      return
    }
    return setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    return setCurrentPage(currentPage + 1)
  }

  return (
    <div className="Cats">
      <p>현재 페이지: {currentPage}</p>
      <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
      <LoadingIndicator isLoading={isLoading} />
      <ul>
        {breeds.map((cat, index) => (
          <li className="Cat" key={`${cat.id}-${index}`}>
            <span>Name: {cat.name}</span>
            <span>Origin: {cat.origin}</span>
            <span>Description: {cat.description}</span>
            <span>
              Wiki:{' '}
              <a href={cat.wikipedia_url} target="_blank">
                {cat.wikipedia_url}
              </a>
            </span>
            <img className="Image" src={cat.image ? cat.image.url : null} />
          </li>
        ))}
      </ul>
      <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
      <LoadingIndicator isLoading={isLoading} />

    </div>
  )
}

export default FuncCats
