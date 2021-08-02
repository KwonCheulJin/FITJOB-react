import { useState, useEffect } from 'react'
import { getQueryString } from '../utils/misc'
import { useLocalStorage } from './useLocalStorage'

const fetchedData = []
export function useFecth(apiUrl, params, headers, initialData = [], currentPage) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [storedBreeds, storeBreeds] = useLocalStorage('breeds', [])
  const [storedPages, storePages] = useLocalStorage('fetchedPages', [])



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
        setData((previousData) => {
          // console.log(previousData)
          const updatedBreeds = [...previousData, ...data]
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
    fetchData()
  }, [apiUrl, params, headers])

  return {
    data,
    isLoading,
    hasError: error !== null,
    error,
  }
}
