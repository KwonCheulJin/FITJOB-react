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
    storedBreeds,
    currentPage
  )

  const handlePreviousPage = useCallback(() => {
    if (currentPage <= 1) return

    setCurrentPage((previousPage) => previousPage - 1)
  }, [currentPage])

  const handleNextPage = useCallback(() => {
    setCurrentPage((previousPage) => previousPage + 1)
  }, [])

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
