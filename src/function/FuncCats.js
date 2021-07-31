import { useState, useEffect, useCallback } from 'react'
import { getCatBreeds } from '../utils/api'
import LoadingIndicator from './components/LoadingIndicator'
import HeaderButtonGroup from './components/HeaderButtonGroup'
import BreedsList from './components/Breeds'
import CurrentPageNumber from './components/CurrentPageNumber'
import { useLocalStorage } from '../hooks/useLocalStorage'


const FuncCats = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  // const [counter, setCounter] = useState(0)
  const [storedBreeds, storeBreeds] = useLocalStorage('breeds', [])
  const [storedPages, storePages] = useLocalStorage('fetchedPages', [])
  const [breeds, setBreeds] = useState(storedBreeds)
  const [currentPage, setCurrentPage] = useState(storedPages.length !== 0 ? storedPages[storedPages.length - 1] : 1)

  const handlePreviousPage = useCallback(() => {
    if (currentPage <= 1) return
    // console.log(currentPage)
    setCurrentPage((previousPage) => previousPage - 1)
  }, [currentPage])

  const handleNextPage = useCallback(() => {
    setCurrentPage((previousPage) => previousPage + 1)
  }, [])

  useEffect(() => {
    //useEffect에서 바로 async를 사용할 수 없다.

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const breedsData = await getCatBreeds(currentPage, 10)
        if (breedsData.length === 0) {
          setIsLoading(false)
          return
        }
        // ----------- 4주차 내가 작성했던 코드 -----------
        // setBreeds((previous) => {
        //   // console.log(new Set(previous), previous.length, breedsData, currentPage)
        //   function getUnique(breedsData, previous) {
        //     return breedsData.map((value) => {
        //       if (previous.length === undefined) return
        //       for (let item of previous) {
        //         if (value.id === item.id) return true
        //       }
        //     });
        //   }
        //   let result = getUnique(breedsData, previous)
        //   console.log(result)
        //   if (result[0]) return [...previous]
        //   return [...previous, ...breedsData]
        // })
        // ----------- 4주차 내가 작성했던 코드 -----------
        setBreeds((previous) => {
          // console.log(previous)
          const updatedBreeds = [...previous, ...breedsData]
          storeBreeds(updatedBreeds)
          return updatedBreeds
        })
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (storedPages.includes(currentPage)) {
      return
    }
    storePages(storedPages.concat(currentPage))
    // console.log(storedPages[storedPages.length - 1])
    fetchData()

  }, [currentPage])


  // useEffect(() => {
  //   if (counter === 100) {
  //     // 무슨 기능 ...
  //   }
  // }, [counter])

  return (
    <div className="Cats">
      {error === null ? (
        <>
          <CurrentPageNumber currentPage={currentPage} />
          <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
          <LoadingIndicator isLoading={isLoading} />
          <BreedsList breeds={breeds} />
          <LoadingIndicator isLoading={isLoading} />
          <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
        </>
      ) : (
        <p>
          데이터를 불러오는 도중 에러가 발생했습니다.
          <br />
          {JSON.stringify(error, null, 2)}
        </p>
      )}

    </div>
  )
}

export default FuncCats
