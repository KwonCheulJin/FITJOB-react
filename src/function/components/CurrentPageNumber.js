import Toggle from './Toggle'
import useDarkMode from '../../hooks/useDarkMode'


const CurrentPageNumber = ({ currentPage }) => {
  const [darkMode, setDarkMode] = useDarkMode();
  // console.log(currentPage)
  if (typeof currentPage !== 'number') {
    throw new Error('currentPage number props로 전달되지 않았습니다.')
  }

  return (
    <div className="page-group">
      <p>현재 페이지: {currentPage}</p>
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default CurrentPageNumber
