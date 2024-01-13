
function Circle(radius) {
     // console.log('this', this);
     this.radius = radius;
     this.draw = function() {
          console.log('draw');
     }
}

// const circle = Circle(1);
const circle = new Circle(1);
circle.draw();
