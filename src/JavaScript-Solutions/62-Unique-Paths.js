function uniquePaths(n,m){
  let row = new Array(n);
  row.fill(1, 0, n);

  for(let i = 1; i < m; i++){
    let newRow = new Array(n);
    newRow[n - 1] = 1;

    for(let j = n - 2; j >= 0; j--){
      newRow[j] = newRow[j + 1] + row[j];
    }

    row = newRow;
  }

  return row[0];

}

console.log(uniquePaths(7,3));