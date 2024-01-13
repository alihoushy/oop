
function Circle(radius) {
     this.radius = radius;
     this.draw = function() {
          console.log('draw');
     }
}

const circle = new Circle(5);


// Adding method 1
circle.location = { x: 1 };

// Adding method 2
circle['location'] = { x: 1 };

// Adding method 3
const locationPropertyName = 'location';
circle[locationPropertyName] = { x: 1 };

// Removing
delete circle.location;
