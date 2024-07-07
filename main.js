// 1.Simple Tuple Example
var person;
person = ["Sidra", 17]; // Correct
// person = [17, "Sidra"]; // Error
console.log(person);
// 2.Tuple with Optional Elements
var employee;
employee = [1, "Sidra"]; // Correct
employee = [2, "Sidra", "Developer"]; // Correct
console.log(employee);
// 3.Tuple with Rest Elements
var list;
list = [1, "apple", "banana", "cherry"];
console.log(list);
// 4.Named Tuple Elements
var user;
user = [1, "Sidra", true];
console.log(user);
// 5.Nested Tuples
var nestedTuple;
nestedTuple = ["Sidra", [2, true]];
console.log(nestedTuple);
