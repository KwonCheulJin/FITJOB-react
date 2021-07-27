import React from 'react'

const CurrentPageNumber = ({ currentPage }) => {

  // console.log(currentPage)
  if (typeof currentPage !== 'number') {
    throw new Error('currentPage number props로 전달되지 않았습니다.')
  }

  return (
    <p>현재 페이지: {currentPage}</p>
  )
}

export default CurrentPageNumber
