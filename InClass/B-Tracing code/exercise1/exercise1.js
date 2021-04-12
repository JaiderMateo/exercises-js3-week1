function greetPeople(people) {
  var greeting = "He";
  greeting = greeting + "llo";
  greeting = greeting + " ";

  people.forEach(function(person) {
    greeting = greeting + person;
	console.log(greeting);
  });

  return greeting;
}

/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
  /*
  It is going to show:
  Hello Irina
  Hello IrinaAshleigh
  Hello IrinaAshleighEtza

  to fix the problem of the names together we just have to change the line 7 like this:
  greeting = `${greeting}${person}`;
  */
