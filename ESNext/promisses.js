console.log('pedir uber')

let aceitar = false
const promessa = new Promise((resolve, reject) => { 
    if (aceitar === true) {
    return resolve('pedido aceito')
    }
    return reject('pedido negado!')
})

console.log('aguardando')
promessa
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error(error)
  })
  .finally(() => {console.log('Finalizado')})