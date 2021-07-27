import { useState, useEffect, useCallback } from 'react'
import { getCatBreeds } from '../utils/api'
import LoadingIndicator from './components/LoadingIndicator'
import BreedsList from './components/Breeds'
import CurrentPageNumber from './components/CurrentPageNumber'


const ScrollCats = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [breeds, setBreeds] = useState([])
  // const [counter, setCounter] = useState(0)

  const handlePreviousPage = useCallback(() => {
    if (currentPage <= 1) return
    console.log(currentPage)
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

      setBreeds((previous) => [...previous, ...breedsData])
      setIsLoading(false)

    }

    fetchData()

  }, [currentPage])

  // useEffect(() => {
  //   if (counter === 100) {
  //     // 무슨 기능 ...
  //   }
  // }, [counter])

  return (
    <div className="Cats">
      <CurrentPageNumber currentPage={currentPage} />
      <BreedsList breeds={breeds} />
      <LoadingIndicator isLoading={currentPage !== 0 && isLoading} onNextPage={setCurrentPage} />
    </div>
  )
}

export default ScrollCats
