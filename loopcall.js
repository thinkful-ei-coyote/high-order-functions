function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i);
    }
  }
            //0   1  2  3  4
  const arr = [0, 2, 7, 9, 10];

 let callback = function(value, index) {
    console.log('Value at index ' + index + ' is ' + value);
  }

  myForEach(arr, callback);
  
  myForEach(arr, function(value, index) {
    console.log('Here is the value! ' + value);
  });


