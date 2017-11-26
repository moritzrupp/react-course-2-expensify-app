const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Moritz',
        //     age: 25
        // });
        reject('Something went wrong');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('Error caught:', error);
});

console.log('after');