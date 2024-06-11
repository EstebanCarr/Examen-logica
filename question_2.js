function Pairs(input) {
  var parnumers =[];
  for (let i = 0; i < input.length; i++) {
    var num =input[i];
    if (num % 2 ===0) {
        if (!parnumers.includes(num)) {
            parnumers.push(num);
        }
    }
  }
  return parnumers
}
let  numbers = [2,7,9,12,33,15,22,12,4]
let respuesta =Pairs(numbers);
let secnubers = [1,2,3,4,5,6,7,2,4,6,8,6]
let securespuesta = Pairs(secnubers);
console.log(respuesta,securespuesta);
