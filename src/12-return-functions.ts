(()=>{
  const calcTotal= (prices:number[]): number =>{
    let total = 0;
    prices.forEach(item=>{
      total += item
    })
    return total
  }
  const printTotal = (prices: number[]): string =>{
    return `El total es ${calcTotal(prices)})`

  }

  const productsPrice = [100, 200, 300, 400]
  const total = calcTotal(productsPrice)
  console.log('total', total)
  const totalPrint = printTotal(productsPrice)
  console.log('totalPrint', totalPrint)
})()
