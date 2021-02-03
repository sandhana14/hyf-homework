console.log("inside warmup file");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    console.log(`The diameter of the circle is ${2 * this.radius}`);
  }
  getCircumference() {
    console.log(
      `The circumference of the circle is ${(2 * Math.PI * this.radius).toFixed(
        2
      )}`
    );
  }
  getArea() {
    console.log(
      `The area of the circle is ${(
        Math.PI *
        this.radius *
        this.radius
      ).toFixed(2)}`
    );
  }
}

const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();
