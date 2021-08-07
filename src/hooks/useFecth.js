import { useState, useEffect } from 'react'
import { getQueryString } from '../utils/misc'
import { useLocalStorage } from './useLocalStorage'


export function useFecth(apiUrl, params, headers, initialData = [], storeStorage, getShouldFetch) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  // const [storedBreeds, storeBreeds] = useLocalStorage('breeds', [])
  // const [storedPages, storePages] = useLocalStorage('fetchedPages', [])



  useEffect(() => {

    const fetchData = async () => {

      try {
        setIsLoading(true)

        const response = await fetch(`${apiUrl}${getQueryString(params)}`, {
          method: 'GET',
          mode: 'cors',
          cache: 'default',
          headers,
        })
        const data = await response.json()
        setData((previousData) => [...previousData, ...data])
        storeStorage(data)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    // if (storedPages.includes(currentPage)) {
    //   return
    // }
    // storePages(storedPages.concat(currentPage))

    if (getShouldFetch()) {
      fetchData()
    }
  }, [apiUrl, params, headers])

  return {
    data,
    isLoading,
    hasError: error !== null,
    error,
  }
}
