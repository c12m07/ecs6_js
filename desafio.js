function deObjetoAmatriz(objeto){
  
  let result = Object.entries(objeto);

}


function numberOfCharacters(string) {

  let result = {};

  for(let i = 0; i < string.length; i++){
    if(!result[string[i]]){
      result[string[i]] = 0;
    }  
    result[string[i]] += 1;
  }
  return result;

}


function capToFront(s) {

  let result = s.split("");
  let mayus = [];
  let minus = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i].toUpperCase()) {
      mayus.push(result[i]);
    } else {
      minus.push(result[i]);
    }
  }

  let final = mayus.join("").toString() + minus.join("").toString();

  return final;

}

function asAmirror(str) {

  let arr = str.split(" ")
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    
    result.push(arr[i].split("").reverse().join(""))
    
  }

  return result;

} 


function capicua(numero){

  let string = numero.toString();
  let result = string.split("").reverse().join("");

  if (string === result) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }

}

function deleteAbc(cadena){

  let string = cadena.split("");

  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'b' || string[i] === 'B' || string[i] === 'c' || string[i] === 'C') {
      delete string[i]
    }
  }

  let result = string.join("").toString();

  return result;
}

function sortArray(arr) {

  arr.sort((a, b) => a.length - b.length)
  return arr;

}

function buscoInterseccion(arreglo1, arreglo2){

  let result = [];

  for (let i = 0; i < arreglo1.length; i++) {

    for (let z = 0; z < arreglo2.length; z++) {

      if(arreglo1[i] === arreglo2[z]){
        result.push(arreglo2[z])
      }
      
    }
    
  }

  return result;
  
}