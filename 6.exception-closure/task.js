function parseCount (number) {
  if (isNaN(parseFloat(number))) {
      throw new Error("Невалидное значение");
  } else {return parseFloat(number);}
}

function validateCount (number) {
  try {
      return parseCount(number)
  } catch (error) {
      return error;
  }
}

class Triangle {
constructor (a,b,c) {
  if (a+b>c && b+c>a && c+a>b){
      this.a = a;
      this.b = b;
      this.c = c;
  } else {
      throw new Error("Треугольник с такими сторонами не существует");
  }
}

get perimeter () {
  return this.a + this.b + this.c;
}

get area () {
  let p = this.perimeter / 2
  return +Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
}


}


function getTriangle(a, b, c) {
try {
  return new Triangle(a, b, c);

} catch(error) {
  return {
      get perimeter() {
          return "Ошибка! Треугольник не существует"
      },
      get area() {
          return "Ошибка! Треугольник не существует"
      }
  }
}}
