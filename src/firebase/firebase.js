import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCPqAmIO3Sb5NVzg-iSASv9TTx-JVLSH_4",
    authDomain: "expensify-cfde9.firebaseapp.com",
    databaseURL: "https://expensify-cfde9.firebaseio.com",
    projectId: "expensify-cfde9",
    storageBucket: "expensify-cfde9.appspot.com",
    messagingSenderId: "309976468955"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase , database as default};

// database.ref('expenses').push({
//     description:'Rent',
//     note:'',
//     amount:1200,
//     createdAt:120
// });

// database.ref('expenses').push({
//     description:'Food',
//     note:'',
//     amount:10,
//     createdAt:110
// });

// database.ref('expenses/-L_aqOi9ugUjOhDiw4Lc').update({
//     description:'rentee'
// })



//fetch data one time
// database.ref('expenses').once('value').then((Snapshot) => {
//     const expenses = [];
//     Snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key
//         });
//     })
//     console.log('data', Snapshot.val());
//     console.log('result', expenses);
// }).catch((e) => {
//     console.log('e', e);
// })

//fetch data while changes occured like subscription 
//database.ref('expenses').on('value', (Snapshot) => {
// const expenses = [];
// Snapshot.forEach((childSnapshot) => {
//     expenses.push({
//         id: childSnapshot.key
//     });
// })
// console.log('change', expenses);
// }, (error) => {
//     console.log('e', error);
// })

// setTimeout(() => {
//     database.ref().update({
//         'job/title':'Tester'
//     });
// }, 2000)



// setTimeout(() => {
//     database.ref().off();
// }, 2000)

// setTimeout(() => {
//     database.ref().update({
//         'location/city':'Chennai'
//     });
// }, 2000)
// database.ref().set({
//     name: 'Andrew Mead',
//     age:25,
//     stresslevel:6,
//     job:{
//         title:'Software developer',
//         company:'Amazon'
//     },
//     isSingle:false,
//     location:{
//         city:'Philadelphia',
//         country:'USA'
//     }
// }).then(() => {
//     console.log("data saved");
// }).catch((e) => {
//     console.log('e',e);
// })

// database.ref('attributes').set(['heighttt','weight']).then(() => {
//     console.log("2 Data saved")
// }).catch((e) => {
//     console.log('2e',e);
// })

//to remove data
// database.ref('isSingle').remove().then(() => {
//     console.log('Removed successfully');
// })
// .catch((e) => {
//     console.log('e',e);
// })

//database.ref('isSingle').set(null);

//to update
// database.ref().update({
//     stresslevel:9,
//     'job/company':'Google',
//     'location/city':'Boston'
// })
