export const cmp = ({ nodos }) => {
  console.log(nodos);
  temprano(nodos, nodos[0], 0);
  tardio(nodos, nodos[1], nodos[1].fin_temp);
};

function temprano(nodos, nodo, fin_anter) {
  if (!nodo.int_temp) {
    nodo.int_temp = fin_anter;
    nodo.fin_temp = nodo.int_temp + nodo.duracion;
  } else {
    if (fin_anter > nodo.int_temp) {
      nodo.int_temp = fin_anter;
      nodo.fin_temp = nodo.int_temp + nodo.duracion;
    } else return;
  }
  nodo.sucesores.forEach((element) => {
    temprano(nodos, nodos[element], nodo.fin_temp);
  });
}

function tardio(nodos, nodo, int_anterior) {
  if (!nodo.fin_tard) {
    nodo.fin_tard = int_anterior;
    nodo.int_tard = nodo.fin_tard - nodo.duracion;
  } else {
    if (int_anterior < nodo.fin_tard) {
      nodo.fin_tard = int_anterior;
      nodo.int_tard = nodo.fin_tard - nodo.duracion;
    } else return;
  }
  nodo.predecesores.forEach((element) => {
    tardio(nodos, nodos[element], nodo.int_tard);
  });
}

function camino(nodos) {}
