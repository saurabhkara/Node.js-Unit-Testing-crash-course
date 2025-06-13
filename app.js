export function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Saurabh"));

export function sum(a, b) {
  return a + b;
}

export function processOrder(data, dependency) {
  const result = dependency.processPayment(data.amount);
  return result;
}

function processPayment(amount) {
  console.log("Process Payment method");
  //Api call
  return { id: 1, amount: amount };
}

// console.log(processOrder({ amount: 100 }));
