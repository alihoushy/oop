
function Circle(radius) {
     this.radius = radius;
     let defaultLocation = { x: 0, y: 0 };
     let computedOptimumLocation = function() {
          defaultLocation = { x: 10, y: 10 };
     }
     this.draw = function() {
          computedOptimumLocation();
          console.log('defaultLocation', defaultLocation);
          console.log('draw');
     }
}

const circle = new Circle(5);
circle.radius = 20;
circle.draw();
