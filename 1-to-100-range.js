function oneToHundred(n) {
  let i = 0;
  let num = Number(n[i]);
  while (num < 1 || num > 100) {
    i++;
    console.log("Invalid number!");
    let num = Number(n[i]);
  }
  console.log(`The number is: ${num}`);
}

oneToHundred([-22, 401, 93]);
