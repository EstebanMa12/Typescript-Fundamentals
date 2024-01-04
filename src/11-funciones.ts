// Declaración de una función
// function nombreFuncion(parametro1: tipo, parametro2: tipo): tipoDeRetorno {
  // Cuerpo de la función
  // Realiza alguna operación
//   return resultado;
// }
type Sizes = "s"|'m'|'l'|'xl';
function createProductToJSON(
  title:string,
  createdAt:Date,
  stock: number,
  size?:Sizes
){
  const product = {
    title,
    createdAt,
    stock,
    size
  }
  return JSON.stringify(product)
}

const product = createProductToJSON('Title', new Date(), 100, 'xl')
console.log(product)

