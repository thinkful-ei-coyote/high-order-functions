let start= function(firstCall=function(){ console.log('default func')}, secondCall) {
  //fred = callback
  firstCall();
  console.log("This is the main function");

  secondCall();
}

function main() {

  function callback() {
    for (let i = 0; i < 2; i++) {
      console.log(`I'm calling you back!`);
    }
  }

  function otherCallback() {
    console.log(`I'm calling you back again!`);
  }
//array of functions for fun
  //let arr = [callback,otherCallback];
  //for(let func of arr){
     // func();
 // }

 
  start(callback, otherCallback);
}



main();