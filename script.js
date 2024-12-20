const numbers = Array.from({ length: 9 }, (_, index) => index + 1);

numbers.forEach(i => {
  numbers.forEach(j => {
    console.log(`${i} x ${j} = ${i * j}`);
  });
});