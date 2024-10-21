/* eslint-disable react/prop-types */
import './MyForm.css'

export const MyForm = ({nodos, setNodos, aristas, setAristas}) => {
  

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

    //Crear aristas
    const newAristas = [...aristas];
    let seleccionados = event.target.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    if (seleccionados.length > 0) {
      seleccionados.forEach((element) => {
        const arista = {
          source: element.value,
          target: nodo.id,
          id: `${element.value}-${nodo.id}`,
          label: `${element.value}-${nodo.id}`,
        };
        newAristas.push(arista);
        const deleteIndex = newAristas.findIndex((e) => e.id == `${element.value}-${nodos[1].id}`)
        if(deleteIndex>0){
          newAristas.splice(deleteIndex, 1)
        }
      });
      console.log(newAristas);
      setAristas(newAristas);
      
    }else{
      const arista = {
        source: nodos[0].id,
        target: nodo.id,
        id: `${nodos[0].id}-${nodo.id}`,
        label: `${nodos[0].id}-${nodo.id}`,
      };
      newAristas.push(arista);
      setAristas(newAristas);
    }
    const arista = {
      source: nodo.id,
      target: nodos[1].id,
      id: `${nodo.id}-${nodos[1].id}`,
      label: `${nodo.id}-${nodos[1].id}`,
    };
    newAristas.push(arista);
    setAristas(newAristas);
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
