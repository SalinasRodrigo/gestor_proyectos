import { useState } from "react";
import './MyForm.css'

export const MyForm = () => {
  const [nodos, setNodos] = useState([]);
  const [aristas, setAristas] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nodos.find((element) => element.id == event.target.nodo.value)) {
      return;
    }
    //crear nodo
    const nodo = {
      id: event.target.nodo.value,
      label: event.target.nodo.value,
    };
    const newNodos = [
      ...nodos,
      {
        ...nodo,
      },
    ];
    setNodos(newNodos);
    console.log(newNodos);

    //Crear aristas
    let seleccionados = event.target.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    if (seleccionados.length > 0) {
      const newAristas = [...aristas];
      seleccionados.forEach((element) => {
        const arista = {
          source: element.value,
          target: nodo.id,
          id: `${element.value}-${nodo.id}`,
          label: `${element.value}-${nodo.id}`,
        };
        newAristas.push(arista);
      });
      console.log(newAristas);
      setAristas(newAristas);
    }

    event.target.reset();
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <label htmlFor="inp-nodo">Agregar un nodo</label>
      <input type="text" name="nodo" id="inp-nodo" />
      <div>
        <label htmlFor="inp-arista">Agregar relación</label>
        {nodos.length > 0 ? (
          nodos.map((nodo, index) => (
            <div key={`${nodo.id}-${index}`}>
              <label htmlFor={`${nodo.id}-${index}`}>{nodo.label}</label>
              <input
                type="checkbox"
                name={nodo.id}
                id={`${nodo.id}-${index}`}
                value={nodo.id}
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <input type="submit" value="Agregar" />
    </form>
  );
};
