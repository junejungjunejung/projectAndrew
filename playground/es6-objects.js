const name = 'june'
const userAge = 32

const user = {
  name, //object property shorthand syntax
  age : userAge,
  location: 'canada'
}

console.log(user)

//object destructuring
const product = {
  label: 'red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}
//const label = product.label
//const price = product.price

//const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock)
}

transaction('order', product)