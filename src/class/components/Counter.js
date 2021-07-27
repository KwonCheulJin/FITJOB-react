import { useState, useMemo, memo, forwardRef } from 'react'


// function getCount() {
//   console.log("expensive")
//   return Array(100000)
//     .fill(1)
//     .reduce((acc, cur) => acc + cur, 0)
// }

// function Counter() {
//   // handleClick를 클릭해서 리렌더링 될때마다 비싼 연산이 계속 일어난다. const expensivelyCaculatedCount = getCount()
//   // const expensivelyCaculatedCount = getCount()
//   // const [count, setCount] = useState(expensivelyCaculatedCount)

//   const [count, setCount] = useState(() => getCount())

//   const handleClick = () => {
//     setCount((previousCount) => previousCount + 1)
//   }

//   return (
//     <section>
//       <span>{count}</span>
//       <button onClick={handleClick}>Plus 1</button>
//     </section>
//   )
// }

function getCount(fillNumber) {
  console.log('An expensive work is been executing...')
  return Array(100000)
    .fill(fillNumber)
    .reduce((acc, cur) => acc + cur, 0)
}
const a = {
  teacher: 'john',
  mother: 'emily'
}
const b = {
  teacher: 'john',
  mother: 'emily'
}

function isSameObject(first, second) {
  // return Object.entries(first).every(([key, value]) => {
  //   if (value === second[key]) {
  //     return true
  //   }
  // })
  return JSON.stringify(first) === JSON.stringify(second)
}

// console.log(isSameObject(a, b))

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  useEffect(() => {
    inputEl.current.focus();
  }, [])

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

// function Counter({ fillNumber }) {
//   const [text, setText] = useState('')
//   const sum = useMemo(() => getCount(fillNumber), [fillNumber])

//   // memoization
//   // const store = new Map()
//   // const add = (a, b) => {
//   //   // a, b -> store
//   //   // if (store[a, b] !== null) { 값이 있다. -> 반환 } 
//   //   // else { store[a, b] = 값 -> 반환 }
//   //   // 주어진 파라미터가 똑같은데, 이미 주어진 파라미터로 계산된 결과가 있는지 확인
//   //   // 있으면 저장된 공간에서 꺼내서 곧바로 반환
//   //   // 없으면 값비싼 연산을 한 번 수행하고 어딘가에 저장한 뒤에 반환
//   // }
//   // const result = add(10000000, 123123124123)


//   return (
//     <section>
//       <span>Sum: {sum}</span>
//       <input value={text} type="text" onChange={(event) => setText(event.target.value)} />
//     </section>
//   )
// }

const Counter = forwardRef(({ fillNumber }, ref) => {
  const [text, setText] = useState('')
  const sum = useMemo(() => getCount(fillNumber), [fillNumber])

  // memoization
  // const store = new Map()
  // const add = (a, b) => {
  //   // a, b -> store
  //   // if (store[a, b] !== null) { 값이 있다. -> 반환 } 
  //   // else { store[a, b] = 값 -> 반환 }
  //   // 주어진 파라미터가 똑같은데, 이미 주어진 파라미터로 계산된 결과가 있는지 확인
  //   // 있으면 저장된 공간에서 꺼내서 곧바로 반환
  //   // 없으면 값비싼 연산을 한 번 수행하고 어딘가에 저장한 뒤에 반환
  // }
  // const result = add(10000000, 123123124123)


  return (
    <section>
      <span>Sum: {sum}</span>
      <input value={text} ref={ref} type="text" onChange={(event) => setText(event.target.value)} />
    </section>
  )
})

Counter.displayName = 'Counter'

export default memo(Counter, (prevProps, nextProps) => {
  return isSameObject(prevProps, nextProps)
})