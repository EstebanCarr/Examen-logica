function TwinPrim(inicio, fin) {
  function isPrim(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
  }

  const gemelos = [];
  for (let i = inicio; i <= fin - 2; i++) {
      if (isPrim(i) && isPrim(i + 2)) {
          gemelos.push([i, i + 2]);
      }
  }
  return gemelos.length > 0 ? gemelos : 0;
}
console.log("0,10 :",TwinPrim(0, 10));
console.log(" 100,150 : ",TwinPrim(100, 150));
console.log("700,800 :",TwinPrim(700, 800));