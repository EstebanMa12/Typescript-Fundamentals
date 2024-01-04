(()=>{
  let idUser: any;
  idUser = 1
  idUser = '1'

  console.log('idUser', idUser)

  const rta = (idUser as string).toLowerCase();
  console.log('rta', rta)

  // Buscar username dado un ID
  function getUsernameById(id: number | string) {
    // Lógica de negocio, find the user
    return 'luixaviles'
  }

  idUser = 154545;
  let rta2 = (<number>idUser).toFixed();
  console.log('rta2', rta2)

  getUsernameById(20)
  getUsernameById('20')

  // Alias de tipos: TS
  type IdUser = number | string
  type Username = string
  let idUser2: IdUser
  idUser2 = 10
  idUser2 = '10'

  // Buscar username dado un ID
  function getUsernameById2(id: IdUser): Username {
    // Lógica de negocio, find the user
    return 'luixaviles'
  }

  getUsernameById2(20)
  getUsernameById2('20')

  // Tipos literales
  // 100x100, 500x500, 1000x1000
  type SquareSize = '100x100' | '500x500' | '1000x1000'
  // let smallPicture: SquareSize = '200x200' // Error
  let smallPicture: SquareSize = '100x100'
  let mediumPicture: SquareSize = '500x500'
  let largePicture: SquareSize = '1000x1000'
})()
