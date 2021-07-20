import React from 'react'

const LoadingIndicator = ({ isLoading }) => {

  if (!isLoading) {
    return null
  }

  return (

    <span className="loading">로딩중....</span>

  )
}

export default LoadingIndicator
