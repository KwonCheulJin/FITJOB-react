import { useState, useEffect, useCallback } from 'react'
import { getCatBreeds } from '../utils/api'
import LoadingIndicator from './components/LoadingIndicator'
import HeaderButtonGroup from './components/HeaderButtonGroup'
import BreedsList from './components/Breeds'
import CurrentPageNumber from './components/CurrentPageNumber'


const FuncCats = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [breeds, setBreeds] = useState([])


  const handlePreviousPage = useCallback(() => {
    if (currentPage <= 1) return

    setCurrentPage((previousPage) => previousPage - 1)
  }, [currentPage])

  const handleNextPage = useCallback(() => {
    setCurrentPage((previousPage) => previousPage + 1)
  }, [currentPage])

  useEffect(() => {
    //useEffect에서 바로 async를 사용할 수 없다.
    const fetchData = async () => {

      setIsLoading(true)

      const breedsData = await getCatBreeds(currentPage, 10)

      if (breedsData.length === 0) {
        setIsLoading(false)
        return
      }

      setBreeds((prev) => [...prev, ...breedsData])
      setIsLoading(false)

    }

    fetchData()

  }, [currentPage])


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
