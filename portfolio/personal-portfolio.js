//Object design for Lab site projects
const projects = [
    {
      name: "Simon Says",
      skills: "Written in C, Displayed on Arduino Uno",
      image: 'Simon-Says.jpg',
      alt: 'Simon Says image',
      date: "December 2024",
      description: "A final project that prompts the user to copy a pattern shown by the program. It goes until a mistake is made or a score of 15 is made.",
      impact: "Learned basic hardware implementation with software programming"
      
    },
    {
        name: "Password Generator",
        skills: "Python, Tkinter",
        image: 'password_generator.png',
        date: "December 2024",
        description: "A final project that randomly generates a password with various characters and length based on user choice.",
        impact: "Learned how to use functions in python.",
    },
    {
        name: "BluePrint Life Site",
        skills: "HTML, CSS, Javascript",
        image: "BluePrintLife_Site.png",
        date: "December 2022",
        description: "Link: https://m-raquel.github.io/wdd130/personal_planner/index.html \n A webiste designed to help people plan there lives. Inclued a Journal section, weekly/monthly calander, and checklist site",
        impact: "Learned the basics of how to create a static website.",
    }
];

const container = document.getElementById('project-container');

projects.forEach(function(project) {
    let showcase = document.createElement('article');
	showcase.setAttribute('id', 'personal-project');

    let html =  `
    <div class="image-container">
        <h2>${project.name}</h2>
        <img class="project-image" src="images/${project.image}" alt="${project.alt}">
    </div>
    <div class="project-information">
        <h3>${project.date}</h3>
        <h4>Skills used in project</h4>
        <p>${project.skills}</p>
        <h4>Description of project</h4>
        <p class="Description">${project.description}</p>
        <h4>Worth</h4>
        <p class="Impact">${project.impact}</p>
        </div>`

    showcase.innerHTML = html;
	container.appendChild(showcase);
});

console.log(projects);

// Javascript for Dropdown Button 

// When the user clicks on the butotn, toggle between hiding and showing
// the content
function toggleDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterDropDown() {
    var input = document.getElementById("userInput");
    var filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    var a = div.getElementsByTagName("a");

    for (var i = 0; i < a.length; i++) {
        var txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
