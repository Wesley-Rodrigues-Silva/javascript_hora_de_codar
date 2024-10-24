const sum = function(a, b){
    return a + b
}

const arrowSum = (a, b) => a + b;

console.log((5, 5));

console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        return `Hello ${name}!`
    } else {
        return 'Hello'
    }
};

console.log(greeting('Matheus'));
console.log(greeting());

const user = {
    name: 'Theo',
    sayUseName() {
        setTimeout(function() {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 1000);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`);
        },2000);
    },
};

user.sayUseName();
user.sayUserNameArrow();
