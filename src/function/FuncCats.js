import { useState, useEffect, useCallback, useMemo } from 'react'
import { catApiUrl, catHeaders } from '../utils/api'
import LoadingIndicator from './components/LoadingIndicator'
import HeaderButtonGroup from './components/HeaderButtonGroup'
import BreedsList from './components/Breeds'
import CurrentPageNumber from './components/CurrentPageNumber'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useFecth } from '../hooks/useFecth'


const FuncCats = () => {

  const [storedBreeds, storeBreeds] = useLocalStorage('breeds', [])
  const [storedPages, storePages] = useLocalStorage('fetchedPages', [])
  const [currentPage, setCurrentPage] = useState(storedPages.length !== 0 ? storedPages[storedPages.length - 1] : 1)
  const params = useMemo(
    () => ({
      page: currentPage,
      limit: 10,
    }), [currentPage]
  )
  const {
    data: breeds,
    isLoading,
    hasError,
    error,
  } = useFecth(
    `${catApiUrl}/breeds`,
    params,
    catHeaders,
    storedBreeds
  )

  const handlePreviousPage = useCallback(() => {
    if (currentPage <= 1) return

    setCurrentPage((previousPage) => previousPage - 1)
  }, [currentPage])

  const handleNextPage = useCallback(() => {
    setCurrentPage((previousPage) => previousPage + 1)
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true)
  //       const breedsData = await getCatBreeds(currentPage, 10)
  //       if (breedsData.length === 0) {
  //         setIsLoading(false)
  //         return
  //       }
  //       // ----------- 4주차 내가 작성했던 코드 -----------
  //       // setBreeds((previous) => {
  //       //   // console.log(new Set(previous), previous.length, breedsData, currentPage)
  //       //   function getUnique(breedsData, previous) {
  //       //     return breedsData.map((value) => {
  //       //       if (previous.length === undefined) return
  //       //       for (let item of previous) {
  //       //         if (value.id === item.id) return true
  //       //       }
  //       //     });
  //       //   }
  //       //   let result = getUnique(breedsData, previous)
  //       //   console.log(result)
  //       //   if (result[0]) return [...previous]
  //       //   return [...previous, ...breedsData]
  //       // })
  //       // ----------- 4주차 내가 작성했던 코드 -----------
  //       setBreeds((previous) => {
  //         // console.log(previous)
  //         const updatedBreeds = [...previous, ...breedsData]
  //         storeBreeds(updatedBreeds)
  //         return updatedBreeds
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       setError(error)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   if (storedPages.includes(currentPage)) {
  //     return
  //   }
  //   storePages(storedPages.concat(currentPage))
  //   // console.log(storedPages[storedPages.length - 1])
  //   fetchData()

  // }, [currentPage])


  return (
    <div className="Cats">
      {!hasError ? (
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