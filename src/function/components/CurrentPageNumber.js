import Toggle from './Toggle'


const CurrentPageNumber = ({ currentPage }) => {


  if (typeof currentPage !== 'number') {
    throw new Error('currentPage number props로 전달되지 않았습니다.')
  }

  return (
    <div className="page-group">
      <p>현재 페이지: {currentPage}</p>
      <Toggle />
    </div>
  )
}

export default CurrentPageNumber
