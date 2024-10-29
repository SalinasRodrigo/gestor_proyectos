/* eslint-disable react/prop-types */
import "./MyTable.css";

export const MyTable = ({ nodos }) => {
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>Nodo</th>
          <th>Duración</th>
          <th>Inicio temprano</th>
          <th>Final temprano</th>
          <th>Inicio tardio</th>
          <th>Final tardio</th>
          <th>Predecesores</th>
          <th>Actividad critica</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {nodos.map((nodo) => (
          <tr key={nodo.id}>
            <td>{nodo.label}</td>
            <td>{nodo.duracion}</td>
            <td>{nodo.int_temp}</td>
            <td>{nodo.fin_temp}</td>
            <td>{nodo.int_tard}</td>
            <td>{nodo.fin_tard}</td>
            <td>
              {nodo.predecesores.length > 0 &&
                nodo.predecesores.map((element) => nodos[element].label)}
            </td>
            <td>{nodo.fill === "#f44336" ? "si" : "no"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
