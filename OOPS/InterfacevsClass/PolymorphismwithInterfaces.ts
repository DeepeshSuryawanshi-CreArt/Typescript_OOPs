interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  getArea() {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Circle(3),
];

shapes.forEach((shape) => {
  console.log("Area:", shape.getArea());
});
