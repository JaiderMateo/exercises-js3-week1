 const getRepos =  function(repoName) {
  return  fetch('https://api.github.com/users/' + repoName + '/repos')  
    .then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
        console.log(rep.name);
        return `${rep.name} \n`;
      });
    });
};

async function main(){
const migracodeRepos = await getRepos('migracode-barcelona');
console.log("Loading...");
var myElement = document.querySelector("#main");
var paragraph = document.createElement("p"); 
paragraph.innerText = migracodeRepos;
myElement.appendChild(paragraph);

}


main();
//Task1. Fix the code
//Task2. Create a <p> for each repository
