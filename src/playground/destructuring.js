//
// Object destructuring
//

// const person = {
//     name: 'Moritz',
//     age: 25,
//     location: {
//         city: 'Stuttgart',
//         temp: 6
//     }
// };

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && typeof temperature === 'number') {
//     console.log(`It's ${temperature}°C in ${city}.`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['Hasenbergsteige 22', 'Stuttgart', 'Baden-Wuerttemberg', '70197'];
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);