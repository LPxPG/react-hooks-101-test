import React, {useState } from 'react'

const App = (props) => {
  // const initialStates = {
  //   name: '',
  //   price: 1000
  // }
  // const [name, setName] = useState(initialStates.name)
  // const [price, setPrice] = useState(initialStates.price)

  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)

  const [state, setState] = useState(props)

  const {name, price} = state

  // const reset = () => {
  //   setPrice(props.price)
  //   setName(props.name)
  // }

  return (
    <>
      {/*
      <p>現在の{name}は、{price}です。</p>
      <button onClick={()=>setPrice(price + 1)}>+1</button>
      <button onClick={()=>setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={(e)=> setName(e.target.value)} />
      */}

      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={()=> setState(props)}>Reset</button>
      <input value={name} onChange={(e) => setState({ ...state, name: e.target.value })} />
    </>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App
