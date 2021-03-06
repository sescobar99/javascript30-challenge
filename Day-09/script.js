const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('#breakdown');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', 'interpolated');

// Styled
console.log('%c I am some great and "large" text', 'font-size: 5px; background:yellow; text-shadow: 1px 1px 0 blue;');

// warning!
console.warn('Warning');

// Error :|
console.error('Error');

// Info
console.info('El gobierno nos roba y no nos damos cuenta (it seems chrome displays console.info just as regular console.log 😢)');

// Testing
const p = document.querySelector('p');

// console.assert(p.classList.contains('ouch'), 'That is wrong!');
console.assert(1 === 0, '0 is not equall to 1')

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
// console.clear();

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})

// counting   
console.groupCollapsed('numCount');
console.count('1');
console.count('2');
console.count('3');
console.count('1');
console.count('3');
console.count('3');
console.count('2');
console.count('1');
console.count('1');
console.count('3');
console.count('2');
console.count('0');
console.groupEnd('numCount');


// timing
// console.time('fetching data directly from https://api.covid19api.com/all');
//   fetch('https://api.covid19api.com/all') // summary
//     .then(data => data.json())
//     // .then(data => data.blob())
//     .then(data => {
//       console.timeEnd('fetching data directly from https://api.covid19api.com/all');
//       // console.log('Size: ' +data.size);
//       console.table(data);
//     });

timeFetch('https://api.covid19api.com/summary');
// timeFetch('https://api.covid19api.com/countries');


function timeFetch(url) {
    console.time('fetching data from ' + url);
    fetch(url) // summary
        .then(data => data.json())
        // .then(data => data.blob())
        .then(data => {
            console.timeEnd('fetching data from ' + url);
            // console.log('Size: ' +data.size);
            console.table(data);
        });

}

document.getElementById('fetchB').addEventListener('click', function () {
    timeFetch('https://api.covid19api.com/all'); //
    this.disabled = true;
});