let greetings;
greetings = {}; // it will print empty object : output : {}
console.log(greetings);

// let greetings = { a: "hello", b: "yello", c: 123};
// console.log(greetings);

// another method to create an object
let obj1 = new Object();  // creation
obj1.id = 101;
obj1.name = "Yusuf";
obj1.salary = 30000;

// console.log(obj1);

obj1.salary = 50000;
// console.log(obj1);

let obj2 = new Object();
obj2.id = 102;
obj2.name = "Shan";
obj2.salary = 55000;

let cls = new Object();
cls.obj1 = obj1;
cls.obj2 = obj2;
// console.log(cls);

// assignation through constructor

function assign(a, b, c){
    this.id = a;
    this.name = b;
    this.salary = c;
}

let x = new assign(105, "kamil", 65000);
console.log(x);