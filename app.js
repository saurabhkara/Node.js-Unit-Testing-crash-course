export function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Saurabh"));

export function sum(a, b) {
  return a + b;
}

export function processOrder(data) {
  const result = processPayment(data.amount);
}

function processPayment(amount) {
  return { id: 1, amount: amount };
}

console.log(processOrder({ amount: 100 }));
