import { useState, useEffect } from 'react'
import { getCatsBreeds } from '../utils/api'
import LoadingIndicator from './components/LoadingIndicator'
import HeaderButtonGroup from './components/HeaderButtonGroup'
import BreedsList from './components/Breeds'
import CurrentPageNumber from './components/CurrentPageNumber'


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
      <CurrentPageNumber currentPage={currentPage} />
      <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
      <LoadingIndicator isLoading={isLoading} />
      <BreedsList breeds={breeds} />
      <LoadingIndicator isLoading={isLoading} />
      <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
    </div>
  )
}

export default FuncCats
