//Select the menu and add an event.
const button = document.querySelector("#menuButton");
function toggleMenu() {
    const menu = document.querySelector("#links");
    menu.classList.toggle("hide");
    menu.classList.toggle("visible");
}
button.addEventListener("click", toggleMenu);
//Handeling window resize
function handleResize() {
  const menuResize = document.querySelector("#menuButton");
  if (window.innerWidth < 1000) {
    menuResize.classList.remove("hide");
  } else {
    menuResize.classList.add("hide"); 
  }
}
handleResize();
window.addEventListener("resize", handleResize);


const gallery = document.querySelector(".gallery")

//A function to handle the event of the entire image gallery being clicked. 
function galleryclicked() {
    const clickedImage = event.target.closest('img')

    let src = clickedImage.getAttribute("src");
    let alt = clickedImage.getAttribute("alt");
    const largerImage = src.split('-')[0] + '-full.jpeg';

    // Shows a modal with the same image inside of it. 
    const modal = document.createElement("dialog");
    modal.innerHTML = `<img src="${largerImage}" alt="${alt}"><button class='close-viewer'>X</button>`;
    //add a class to alter the image css later
    modal.classList.add('image-modal');
    document.body.appendChild(modal);
    const closeButton = document.querySelector(".close-viewer");

    modal.showModal();

    //Close modal on button click
    closeButton.addEventListener('click', () => {
    modal.close()
    modal.remove()
    });
    //Close modal if clicking outside of the image.
    modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
        modal.remove();
    }
    });
}
//Add event listener for when a user clicks an image
gallery.addEventListener("click", galleryclicked);