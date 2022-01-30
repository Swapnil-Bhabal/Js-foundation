const users = [1, 2, 3, 4];
const playlist = ['Numb', 'Love the way you lie', 'Monsters', 'No Cap', users];
console.log(playlist);          //Array can be mixture of any data types
console.log(typeof(users));

playlist[playlist.length] = true;
console.log(playlist);

//Some of the arrays methods

playlist.push(2,3);
playlist.pop();
console.log(playlist);
playlist.unshift('Fall Off');
console.log(playlist);
playlist.shift('Fall Off');
console.log(playlist);

const concated_array = playlist.concat(users[0]);
console.log(concated_array);


concated_array.splice(0,2,"hey","yo");
console.log(concated_array);

const fruits = ["banana", "orange", "lemon", "apple", "mango"];
const citrus = fruits.slice(1,3);
console.log(citrus);


//Nested Arrays
const colors = [
     ["red", "blue"],
     ["orange", "green"],
     ["white", "grey"]
];

console.log(colors);
console.log(colors[0]);
console.log(colors[0][0]);
console.log(colors[0][1]);


