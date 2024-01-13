
/**
 * Hide the details and complexity,
 * Show or expose the essentials.
 */

function Circle(radius) {
     this.radius = radius;
     this.defaultLocation = { x: 0, y: 0 };
     this.computedOptimumLocation = function() {
          // implementation
     }
     this.draw = function() {
          this.computedOptimumLocation();
          console.log('draw');
     }
}

const circle = new Circle(5);
circle.defaultLocation = false; // issue here
circle.computedOptimumLocation(); // issue here
circle.draw();

/**
 * The above issues must be resolved.
 */
