let terra = {name:'Terra', hobby:'Video Games', codeLevel:5 };
let derrick = {    name: 'Derrick',    hobby: 'playing guitar',    weekendPlans: 'coding',    codeLevel: 3}
let paul = {name: "Paul", hobby: "Movies", weekendPlans: "My Birthday!", codeLevel: 2}
let Garrett = {    name: "Garrett",    hobby: "Video Games",    weekendPlans: "Studying and playing video games",    codeLevel: 2
};
let honz = {name: `Honz`, hobby: `Surfing`, weekendPlans: `friend's wedding`, codeLevel: 1};
let blaze = {name:'Blaze', hobby:"eating",weekendPlans: "studying", codeLevel:4}
let lindsey = {
    name: "Lindsey",    hobby: "Video Games",    weekendPlans: "studying",    codeLevel: 4};
let Jack = {name:"Jack", hobby:"skateboarding", weekendPlans:"sleep", codeLevel:1};
let shirene = {name: "Shirene", hobby: "cycling", weekendPlans: "My bday celebration", codeLevel: 3};
let Sam = {name:'Samantha', hobby:'Driving', weekendPlans:'Daughter Soccer Game', codeLevel:2}
let christina = {name: 'Christina', hobby: 'Writing', weekendPlans: 'Code and relax', codeLevel: 3}
let enkil = {name:'Enkil', hobby:'painting', weekendPlans:'working', codeLevel:1};
let daniel = {    name: "Daniel",     hobby: "Playing Guitar",     weekendPlans: "Relax",     codeLevel: 4};
let studentArr = [terra, derrick, paul, Garrett, honz,blaze,lindsey, Jack,shirene, Sam, christina, enkil, daniel];


//find
//find the first instance of a given search 

let driver = studentArr.find(student => student.hobby==="Video Games" && student.name=="Lindsey");
//console.log(driver);

let confidentCoders = studentArr.filter(student=> student.codeLevel>=3);
//console.log(confidentCoders);

let weekendPlans = studentArr.map(student=> student.weekendPlans);
//console.log(weekendPlans);

let superStudents = studentArr.map(student=>{
    let {name,hobby,weekendPlans='nothing',codeLevel}= student;
   
    codeLevel = codeLevel*100;
    let newObj = {name, hobby,weekendPlans,codeLevel};
    return newObj;


})
console.log(superStudents);

let areThereGuitarPlayers = studentArr.some(student=> student.hobby.toLowerCase().includes("guitar"));
//console.log(areThereGuitarPlayers);

//console.log(studentArr);
let areThereZeroCodeLevelStudents = studentArr.every(student => student.codeLevel > 400);
//console.log(areThereZeroCodeLevelStudents);
