import { useState } from 'react';
import './App.css'
import { Graph } from './Graph'
import { MyForm } from './MyForm'

function App() {
  const [nodos, setNodos] = useState([
    {
      id: "inicio",
      label: "inicio",
    },
    {
      id: "final",
      label: "final",
    },
  ]);
  const [aristas, setAristas] = useState([]);

  return (
    <>
      <Graph nodos={nodos} aristas={aristas}/>
      <MyForm nodos={nodos} setNodos={setNodos} aristas={aristas} setAristas={setAristas}/>
    </>
  )
}

export default App
