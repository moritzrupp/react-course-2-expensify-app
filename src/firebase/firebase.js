import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Black Friday Shopping',
//     note: '',
//     amount: 23940,
//     createdAt: 3500
// });

// database.ref('notes/-KznZpIK0kuxjFrSyuAP').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//         apoijasdf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         xcvcbad: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 10500);

// const data = database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fetching data', e);
// });

// database.ref().set({
//     name: 'Moritz Rupp',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Technical Consultant',
//         company: 'Micro Focus'
//     },
//     location: {
//         city: 'Stuttgart',
//         country: 'Germany'
//     },
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((error) => {
//     console.log('Saving data failed.', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Hewlett Packard Enterprise',
//     'location/city': 'Boeblingen'
// });

// database.ref().remove().then(() => {
//     console.log("Remove succeeded.")
// }).catch((error) => {
//     console.log("Remove failed: " + error.message)
// });