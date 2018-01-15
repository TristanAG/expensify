//array destructuring

const address = ['341 belden st', 'monterey', 'california', '93940']
const [, city, state = 'California'] = address;
console.log(`you are in ${city} ${state}`)

const item = ['Coffee (hot)', '2.00', '$2.50', '2.75'];
const [drink, , mediumPrice] = ['Coffee (hot)', '2.00', '$2.50', '2.75']
console.log(`A medium ${drink} costs ${mediumPrice}`)

//object destructuring
//
// const book = {
//   title: 'Too like the lightning',
//   author: 'Ada Palmer',
//   publisher: {
//     // name: 'test'
//   }
// }
//
// const { title, author } = book;
// const { name: publisherName='Unknown Publisher' } = book.publisher;
//
// console.log(`${title} by ${author}, published by ${publisherName}`)
//
