(()=>{
  let myVar = null; // Tipo any
  console.log(typeof myVar);
  myVar = undefined; // Tipo any
  console.log(typeof myVar);

  let myNull: null=null
  console.log(typeof myNull);
  let myUndefined: undefined=undefined
  console.log(typeof myUndefined);


  let myNumber: number | null = null;
  myNumber = 10;
  console.log(myNumber);
  let myString: string | undefined=undefined
  myString = '10';
  console.log(myString);
  myString = undefined
  console.log(myString);

  function hi(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
  hi('Luis')
  hi(null)

})()
