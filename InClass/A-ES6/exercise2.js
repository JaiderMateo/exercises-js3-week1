class Polygon {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  get area(){
    return this.height * this.width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() {
    return this.width * this.height;
  }
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class triangle extends Polygon{
  constructor(height, width){
    super("tringle", height, width);
    this.sides = 3;
    this.width = width;
    this.height = height;
  }
  get area(){
    return (this.height * this.width)/2
  }
}
let t = new triangle(2, 2);
t.sayName();
console.log(`the area of this triangle is ${t.area}`);

class circle extends Polygon{
  constructor(radius){
    super("circle")
    this.radius = radius;
  }
  get area(){
    return Math.pow(this.radius, 2) * Math.PI;
  }
}
let c = new circle(5);
t.sayName();
console.log(`the are of this circle is ${c.area}`)