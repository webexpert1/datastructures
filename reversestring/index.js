// Create a function that reverses a string:
// 'Hi My name is Richard' should be
// drahciR si eman yM iH


// Soln 1
function reverse(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'Hey this is bad';
    }
    let array1 = str.split('');
    let reverseArray = [];
    for(let i = array1.length - 1; i >= 0; i--) {
        reverseArray.push(array1[i]);
    }
    return reverseArray.join('');1
}

// console.log(reverse('hello'));

// Soln 2
function reverse2(str) {
    let reversed = "";

    for(let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

// console.log(reverse2('Hi My name is Richard'));

// soln 3
const reverse3 = str => [...str].reverse().join('');
console.log(reverse3('hello'))