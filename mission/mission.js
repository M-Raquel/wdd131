let selectElem = document.querySelector('select');

let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark')
    {
        //change body to dark
        document.body.className = 'dark';
        //change logo to the new logo
        
    }
    else 
    {
        //change body to light OR remove dark class from body
        document.body.classList.remove('dark');
        //change logo back to original ; change the src 
    }
}