// // before 
// var chicken = {
//     name: 'Maggie', 
//     age: 2
//   }
  
//   var name = chicken.name;
//   var age = chicken.age;
  
//   var numbers = [1, 2];
  
//   var firstNumber = numbers[0];
//   var secondNumber = numbers[1];
  
  
  // in ES6
  const chicken = {
    name: 'Maggie', 
    age: 2
  }
  
  const { name, age } = chicken;
  
  const numbers = [1, 2];
  
  const [firstNumber, secondNumber] = numbers;
  console.log(chicken, name, age);