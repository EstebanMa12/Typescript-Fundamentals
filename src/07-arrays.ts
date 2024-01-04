(()=>{
  function sumarElementos(array: number[]): number {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

  const numeros = [1, 2, 3, 4, 5, 'hola', true];
  console.log(Array.isArray(numeros));
  console.log(numeros.length);
  console.log(numeros[0]);

  // const suma = sumarElementos(numeros);
  // console.log(suma);

  let mixed: (number | string | boolean)[]=['hola', true];
  mixed.push(1);
  mixed.push('adios');
  mixed.push(false);
  console.log(mixed);

})();
