let emp = {id: 101, name: "Yusuf", salary: 50000};

// M1
console.log(Object.keys(emp));

// M2
console.log(Object.values(emp));

// M3
console.log(Object.entries(emp));

// M4
delete emp.id;
delete emp.name;
console.log(emp);

// M5
emp.id = 103;
console.log(emp);

// here emp object must be = {salary: 50000, id: 103};

// M6
Object.freeze(emp);
emp.name = "khan";
delete emp.salary;
console.log(emp);

let emp2 = {id: 105, name: "kamil", salary: 55000};

// M7
Object.seal(emp2);
emp2.name = "khan";
emp2.add = "mbd";           // Insertion and deletion is not allow in seal method
delete emp.salary;          // while updation is allowed
console.log(emp2);

// here emp2 must be = { id: 105, name: 'khan', salary: 55000 }

// M8    -    assign
let x = Object.assign({}, emp2);
console.log(x);         // { id: 105, name: 'khan', salary: 55000 }

let y = Object.assign({Add: "MBD", Mob: 9084662330}, emp2);
console.log(y);         // { Add: "MBD", Mob: 9084662330, id: 105, name: 'khan', salary: 55000 }