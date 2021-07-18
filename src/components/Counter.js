import { useState } from 'react'


function getCount() {
  console.log("expensive")
  return Array(100000)
    .fill(1)
    .reduce((acc, cur) => acc + cur, 0)
}

function Counter() {
  // handleClick를 클릭해서 리렌더링 될때마다 비싼 연산이 계속 일어난다. const expensivelyCaculatedCount = getCount()
  // const expensivelyCaculatedCount = getCount()
  // const [count, setCount] = useState(expensivelyCaculatedCount)

  const [count, setCount] = useState(() => getCount())

  const handleClick = () => {
    setCount((previousCount) => previousCount + 1)
  }

  return (
    <section>
      <span>{count}</span>
      <button onClick={handleClick}>Plus 1</button>
    </section>
  )
}

export default Counter