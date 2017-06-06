
var nthNum = 100;
fibonacci(nthNum);

function fibonacci(nthNum){
  var n0 = 1;
  var n1 = 1;
  if(nthNum < 0) {
    console.log("Invalid entry.")
    return;
  }
  else if(nthNum === 0) {
    console.log("1");
    return;
  }
  else if(nthNum === 1) {
    console.log("1");
    return;
  }
  else {
    var nth = 0;
    var sum = 0;
    for(let i = 0; i < nthNum; ++i) {
        nth = n0 + n1;
        n0 = n1;
        n1 = nth;

        if(nth%2 === 0) {
          sum = sum + nth;
        }
    }
  }
    console.log(nth);
    console.log(sum);
}
