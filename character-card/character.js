const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/img/snortleblat.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

// Display the character's name on the page
document.querySelector('.name').innerHTML = character.name;

//Display the character's image on the page
document.querySelector('.image').src = character.image;

//Display the character's class on the page
document.querySelector('#class').innerHTML = character.class;

//Display the character's level
document.querySelector('#level').innerHTML = character.level;

//Display the character's Health properties
document.querySelector('#health').innerHTML = character.health;


//Target the attacked method
document.querySelector('#attacked').addEventListener("click", function() {
character.attacked();
document.getElementById("health").innerHTML = character.health;
document.getElementById("level").innerHTML = character.level;


})

//Target the LevelUp method
document.querySelector('#levelup').addEventListener("click", function(){
character.levelUp();
document.getElementById("health").innerHTML = character.health;
document.getElementById("level").innerHTML = character.level;
})