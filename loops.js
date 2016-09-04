// forLoop(array) - adds `"I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."` to an array 25 times
//whileLoop(n) - counts down from n to 0
//doWhile(array) - removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`
function forLoop(array){
  for(var i=0; i <25; i++){
    array.push(`I am ${i+1} strange loop${i === 0 ? '' : 's'}.`);
  }
  return array
};

function whileLoop(n){
  
  while (n>0){
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array){
  
  function maybeTrue() {
    return Math.random() >= 0.5
    };  

  do {
      array = array.pop
    } while ((array.length > 0) && maybeTrue());
  
    return array;

}; 