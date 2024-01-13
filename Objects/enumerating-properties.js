
function Circle(radius) {
     this.radius = radius;
     this.draw = function() {
          console.log('draw');
     }
}

const circle = new Circle(5);


// Usage 1
for (let key in circle)
     console.log(key, circle[key]);

// Usage 2
for (let key in circle)
     if (typeof circle[key] !== 'function')
          console.log(key, circle[key]);

// Usage 3
const keys = Object.keys(circle);
console.log('keys', keys);

// Usage 4
if ('radius' in circle)
     console.log('Circle has a radius.');
