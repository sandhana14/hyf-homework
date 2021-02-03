"use strict";
//Lets make some art using classes
const canvas = document.getElementById("canvasToDraw");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Class creation time!
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.xValue = x;
    this.yValue = y;
    this.radius = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.color = fillColor;
  }
  draw() {
    context.beginPath();
    context.arc(
      this.xValue,
      this.yValue,
      this.radius,
      this.startAngle,
      this.endAngle
    );
    context.stroke();
    context.fillStyle = this.color;
    context.fill();
  }
}
function getRandomColor() {
  const color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  return color;
}

setInterval(() => {
  const circle2 = new Circle(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight,
    Math.floor(Math.random() * 100 + 1),
    0,
    2 * Math.PI,
    getRandomColor()
  );
  circle2.draw();
}, 100);
