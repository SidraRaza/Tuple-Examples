// 1.Simple Tuple Example

let person: [string, number];
person = ["Sidra", 17]; // Correct
// person = [17, "Sidra"]; // Error
console.log(person);


// 2.Tuple with Optional Elements

let employee: [number, string, string?];
employee = [1, "Sidra"]; // Correct
employee = [2, "Sidra", "Developer"]; // Correct
console.log(employee);


// 3.Tuple with Rest Elements

let list: [number, ...string[]];
list = [1, "apple", "banana", "cherry"];
console.log(list);



// 4.Named Tuple Elements

let user: [id: number, name: string, active: boolean];
user = [1, "Sidra", true];
console.log(user);


// 5.Nested Tuples

let nestedTuple: [string, [number, boolean]];
nestedTuple = ["Sidra", [2, true]];
console.log(nestedTuple);
