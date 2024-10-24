/* eslint-disable react/prop-types */
import { cmp } from './cpm';
import './MyForm.css'

export const MyForm = ({nodos, setNodos, aristas, setAristas}) => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nodos.find((element) => element.id == event.target.nodo.value)) {
      return;
    }
    //crear nodo
    const nodo = {
      id: nodos.length.toString(),
      label: event.target.nodo.value,
      subLabel:event.target.duracion.value,
      duracion: parseInt(event.target.duracion.value),
      fill: '#9fc5e8',
      int_temp: null,
      fin_temp: null,
      int_tard: null,
      fin_tard: null,
      sucesores: [],
      predecesores: [],
    };
    //crear nuevo arreglo de nodos que terminara siendo el estado
    const newNodos = [
      ...nodos,
      {
        ...nodo,
      },
    ];
    //seteamos el estado con el nuevo arreglo de nodos
    setNodos(newNodos);

    //Crear aristas
    const newAristas = [...aristas];
    //buescar todos los predecesores seleccionados
    let seleccionados = event.target.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
  
    if (seleccionados.length > 0) {
      //se iteran los predecesores seleccionados
      seleccionados.forEach((element) => {
        //creamos una nueva arista
        const arista = {
          source: element.value,
          target: nodo.id,
          id: `${element.value}-${nodo.id}`,
          label: `${element.value}-${nodo.id}`,
        };
        newAristas.push(arista);

        const index = newNodos.findIndex((e)=> e.id == element.value);
        //eliminamos la arista que conecta el predecesor con el final
        const deleteIndex = newAristas.findIndex((e) => e.id == `${element.value}-${nodos[1].id}`)
        if(deleteIndex>0){
          newAristas.splice(deleteIndex, 1)
          const deleteEdgeIndex = newNodos[index].sucesores.findIndex((e) => e == "1")
          newNodos[index].sucesores.splice(deleteEdgeIndex, 1) //eliminamos el nodo final de los sucesores
          const deleteEndIndex = newNodos[1].predecesores.findIndex((e) => e == element.value)
          newNodos[1].predecesores.splice(deleteEndIndex,1)
        }

        nodo.predecesores.push(element.value) //agregamos el predecesor al arreglo del nodo
        
        //agregamos el nuevo nodo como sucesor de su predecesor
        
        
        newNodos[index].sucesores.push(nodo.id)
        
        
      });
      setAristas(newAristas);
      
    }else{
      const arista = {
        source: nodos[0].id,
        target: nodo.id,
        id: `${nodos[0].id}-${nodo.id}`,
        label: `${nodos[0].id}-${nodo.id}`,
      };
      //agregamos el nodo inicio como predecesor
      nodo.predecesores.push("0")
      newNodos[0].sucesores.push(nodo.id)
      newAristas.push(arista);
      setAristas(newAristas);
    }
    //creamos una arusta qe conecta el nuevo nodo con el final
    const arista = {
      source: nodo.id,
      target: nodos[1].id,
      id: `${nodo.id}-${nodos[1].id}`,
      label: `${nodo.id}-${nodos[1].id}`,
    };
    //agregamos el nodo final como sucesor
    nodo.sucesores.push("1")
    newNodos[1].predecesores.push(nodo.id)
    newAristas.push(arista);
    setAristas(newAristas);
    event.target.reset();

    return;
  };

  const handleCPM = () =>{
    cmp({nodos, setNodos})
    console.log(nodos)
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <label htmlFor="inp-nodo">Agregar un nodo</label>
      <input type="text" name="nodo" id="inp-nodo" />
      <label htmlFor="inp-duracion">Duracion</label>
      <input type="number" name="duracion" id="inp-duracion" />
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
      <input type="button" value="CPM" onClick={handleCPM} />
    </form>
  );
};
