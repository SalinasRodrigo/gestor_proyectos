import { useState } from "react"

export const MyForm = () => {
  const [nodos, setNodos] = useState([])
  //const [aristas, setAristas] = useState([])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const nodo = {
      id: event.target.nodo.value,
      label: event.target.nodo.value
    }
    const newNodos = [
      ...nodos,
      {
        ...nodo
      },
    ]
    console.log(newNodos)
    setNodos(newNodos)
    return
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="nodo" id="inp-nodo" />
      <label htmlFor="inp-nodo">Agregar un nodo</label>
      <div>
        <input type="checkbox" name="equis" id="" />
        <input type="checkbox" name="equis" id="" />
        <input type="checkbox" name="equis" id="" />
        <input type="checkbox" name="equis" id="" />
      </div>
      <label htmlFor="inp-arista">Agregar relación</label>
      <input type="submit" value="Agregar" />
    </form>
  )
}