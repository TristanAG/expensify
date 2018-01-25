import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };










//
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
//
// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     })
// //
// //     console.log(expenses)
// //   })
//
// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //
// //       snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //           id: childSnapshot.key,
// //           ...childSnapshot.val()
// //         })
// //       })
// //       console.log(expenses);
// // })
//
// database.ref('expenses').push({
//   description: 'BORT expense',
//   note: 'i bought something',
//   amount: 12.80,
//   createdAt: 4
// })
//
// // database.ref('expenses').push({
// //   description: 'rhid expense',
// //   note: 'i bought something',
// //   amount: 12.80,
// //   createdAt: 4
// // })
//
// // database.ref('notes/-L3ZvUetJ1gpAMOSo4j1').remove()
//
// // database.ref('notes').push({
// //   title: 'Course topics',
// //   body: 'react, vue, chillin ##'
// // })
//
// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // })
//
//
// //
// //
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val())
// //   console.log(database.ref('name'))
// // }, (e) => {
// //   console.log('error with data fetching', e)
// // })
//
//
//
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val())
// // }, (e) => {
// //   console.log('error with data fetching', e)
// // })
// //
// // setTimeout(() => {
// //   database.ref('age').set(12);
// // }, 3500)
// //
// // setTimeout(() => {
// //   database.ref().off(onValuechange)
// // }, 7000)
// //
// // setTimeout(() => {
// //   database.ref('age').set(21);
// // }, 10500)
//
// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val()
// //     console.log(val)
// //   }).catch((e) => {
// //     console.log('error', e)
// //   })
//
// // database.ref().set({
// //   name: 'Trxstxn Grxxnxr',
// //   age: 31,
// //   stressLevel: 3,
// //   job: {
// //     title: 'web dev',
// //     company: 'nordic naturals'
// //   },
// //   location: {
// //     city: 'Monterey',
// //     country: 'California'
// //   }
// // }).then(() => {
// //   console.log('Data is savvyy');
// // }).catch((e) => {
// //   console.log('this failed', e)
// // });
// //
// // database.ref().update({
// //   stressLevel: -2,
// //   'job/company': 'amazon',
// //   'location/city': 'meatrattle'
// // });
//
//
//
// //
// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('savezors')
// //   }).catch((e) => {
// //     console.log(' no savezors ', e)
// //   })
