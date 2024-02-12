### prototype

In JavaScript, a prototype is an object from which other objects inherit properties. Each object in JavaScript has an internal property called `[[Prototype]]` which points to another object. When you access a property on an object, if the property is not found on the object itself, JavaScript will look into the prototype chain and try to find it in the object's prototype.

Here's an example of how you can use prototypes in JavaScript:

```javascript
// Constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Adding a method to the Person prototype
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

// Creating an instance of Person
var person1 = new Person('John', 'Doe');
var person2 = new Person('Jane', 'Doe');

// Accessing the method defined in the prototype
console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Doe
```

In this example:

- We define a constructor function `Person` which takes `firstName` and `lastName` parameters and assigns them to the instance.
- We add a method `getFullName()` to the `Person` prototype. This method is shared among all instances of `Person`.
- We create two instances of `Person` (`person1` and `person2`) and call the `getFullName()` method on them.

Prototypes allow you to share methods and properties among all instances of an object, which helps in saving memory and promoting code reusability. They also enable prototypal inheritance, which is a key feature of JavaScript's object-oriented programming model.