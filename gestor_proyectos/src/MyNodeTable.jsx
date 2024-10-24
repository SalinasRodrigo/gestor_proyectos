/* eslint-disable react/prop-types */


export const MyNodeTable = ({nodos}) => {


  return(
    <table>
      <thead>
        <tr>
          <th>Nodo</th>
          <th>Duracion</th>
          <th>inicio temprano</th>
          <th>final temprano</th>
          <th>Inicio tardio</th>
          <th>Final tardio</th>
        </tr>
      </thead>
      <tbody>
        {nodos.length > 0 ? nodos.map((nodo, index) =>(
          <tr key={`${nodo.id}-${index}`}>
            <th>{nodo.lable}</th>
            <th>{nodo.duracion}</th>
            <th>{nodo.int_temp}</th>
            <th>{nodo.fin_temp}</th>
            <th>{nodo.int_tard}</th>
            <th>{nodo.fin_tard}</th>
          </tr>
        )) : <></>}
      </tbody>
    </table>

  )
};