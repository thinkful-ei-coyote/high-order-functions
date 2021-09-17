function createAnimal(type, size, numLegs, color){
    return function(){
        console.log(`This ${size} ${type} has ${numLegs} legs and is ${color}`);
    }

}

let dog = createAnimal('dog','medium', 3, 'grey');
let baboon = createAnimal('baboon','medium-large', 4, 'multicolored');

dog();
baboon();



function createCounter() {
    let runningCount = 0;

    return function(increment = 1){
        runningCount += increment;
        return runningCount;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());    // 1
console.log(counter1());    // 2
console.log(counter1());    // 3

console.log(counter2(5));   // 5
console.log(counter2(3));   // 8
console.log(counter2(2));   // 10
console.log(counter2());   // 10

