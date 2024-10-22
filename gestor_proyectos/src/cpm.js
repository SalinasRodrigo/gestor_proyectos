
export const cmp = ({nodos}) => {
  console.log(nodos)
  temprano(nodos, nodos[0], 0)


}



function temprano (nodos, nodo, fin_anter){
  console.log(nodo, fin_anter)
  if(!nodo.int_temp){
    nodo.int_temp = fin_anter
  }else{
    if(fin_anter>nodo.int_temp) nodo.int_temp = fin_anter
  }
  nodo.fin_temp = nodo.int_temp + nodo.duracion

  nodo.sucesores.forEach(element => {
    console.log(element)
    temprano(nodos, nodos[element], nodo.fin_temp)
  });
}

function tardio ({nodo, aristas}){

}