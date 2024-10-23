import { useState } from 'react';
import './App.css'
import { Graph } from './Graph'
import { MyForm } from './MyForm'

function App() {
  const [nodos, setNodos] = useState([
    {
      id: "0",
      label: "inicio",
      duracion: 0,
      subLabel:`0`,
      int_temp: null,
      fin_temp: null,
      int_tard: null,
      fin_tard: null,
      sucesores: [],
      predecesores: [],
      
    },
    {
      id: "1",
      label: "final",
      duracion: 0,
      subLabel:`0`,
      int_temp: null,
      fin_temp: null,
      int_tard: null,
      fin_tard: null,
      sucesores: [],
      predecesores: [],
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
