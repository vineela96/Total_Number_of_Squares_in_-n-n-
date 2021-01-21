function numberSquares(n){
  var total = 0;
  for(i=0;i<=n;i++){
  total= total + (i*i);
  }
  return total;
}

//Test Case

numberSquares(3);
