const num1 = 3;
const num2 = 2;

function addNumbers(){
    console.log(`the sum is: ${num1 + num2}`);
}

function mutliNumbers(){
    console.log(`the product is: ${num1 * num2}`);
}

addNumbers()
mutliNumbers()

module.exports = {addNumbers}