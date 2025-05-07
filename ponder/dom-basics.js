//How to add new text
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
//How to add new images
const newImage = document.createElement('img');
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "A random image put with javascript");
document.body.appendChild(newImage);

//More complex HTML to add like a div and list
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
//Create a section
const newSection = document.createElement("section");
newSection.innerHTML = ("<h2>DOM Basics</h2><p>This was added through Javascript</p>");
document.body.appendChild(newSection);