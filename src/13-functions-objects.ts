(()=>{
  const login = (sata: {
    username: string,
    password: number
  })=>{
    console.log(
      'login\n',
      sata.username,
      sata.password
    );
    }
  const payload = {
    username: 'luixaviles',
    password: 123456
  }
  login(payload)
  const products: any[] = [];


  const addProduct= (data:{
    title: string,
    createdAt:Date,
    stock: number,
    size?:'s'|'m'|'l'|'xl'
  }   )=>{
    products.push(data);
  }
  addProduct({
    title: 'Title',
    createdAt: new Date(),
    stock: 100,
    size: 'xl'
  })
  console.log(products);
  addProduct({
    title: 'New product',
    createdAt: new Date(),
    stock: 2000,
  })
  addProduct({
    title: 'New product 3',
    createdAt: new Date(),
    stock: 200,
    size: 'm'
  })
  console.log(products);

})()
