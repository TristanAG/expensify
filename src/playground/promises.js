const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Thurstan',
    //   age: 33
    // })
    reject('Something went wrong!');

  }, 3000);
});

console.log('before')

promise.then((data) => {
  console.log('1', data);
}).then(() => {
  console.log('will this urn?');
}).catch((error) => {
  console.log('error' + error)
})



console.log('after')
