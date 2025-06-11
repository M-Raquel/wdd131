const ditto = {
id: 132,
name: "ditto",
type: "normal",
abilities: ["limber", "imposter"],
base_experience: 101,
height: 3,
weight: 40,
stats: {
hp: 48,
attack: 48,
defense: 48,
special_attack: 48,
special_defense: 48,
speed: 48
},
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
transform: function(){
return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
}
};

//Display Ditto's name on the page
document.getElementById("name").innerHTML = ditto.name;
//Display Ditto's sprite on the page
document.getElementById("ditto").src = ditto.sprite;
//Display one of ditto's abilities on the page
document.getElementById("ability").innerHTML = ditto.abilities[0];

//Change the sprite to the shiny image is clicked
document.getElementById("ditto").addEventListener("click", function() {
    ditto.transform();
    document.getElementById("ditto").src = ditto.sprite;
});