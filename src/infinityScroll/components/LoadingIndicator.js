import { useRef, useEffect } from 'react'

const LoadingIndicator = ({ isLoading, onNextPage }) => {

  if (typeof isLoading !== 'boolean') {
    throw new Error('isLoading props가 전달되지 않았습니다.')
  }

  const fetchMoreTrigger = useRef(null)
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    console.log(isIntersecting)
    if (isIntersecting) onNextPage(previousPage => previousPage + 1)
  })

  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current)
    return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.current)
    }
  }, [])
  return (

    <div
      id="fetchMore"
      className={isLoading ? "loading" : ""}
      ref={fetchMoreTrigger}>
    </div>

  )
}

export default LoadingIndicator
