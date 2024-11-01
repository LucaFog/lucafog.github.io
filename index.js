const languages =       ["en", "es", "it", "ax"]

const sections =        document.getElementById("sections");
const homeButton =      document.getElementById("home");
const aboutButton =     document.getElementById("about-home");
const projectsButton =  document.getElementById("projects-home");
const contactButton =   document.getElementById("contact-home");
const backButton =      document.getElementById("back-home");

var currentMenuButton 
var currentPath = window.location.pathname;

homeButton.addEventListener("click", function() {
    if (currentPath === '/') {
        toggleVisibility(sections);
    } else {
        window.location.pathname = '/';
    }
} )

switch (currentPath) { // optimise
    case "/about.html":
        aboutButton.addEventListener("click", function() {
            toggleVisibility(sections);
            toggleVisibility(aboutButton);
        } );
        currentMenuButton = aboutButton
        break;

    case "/projects.html":
        projectsButton.addEventListener("click", function() {
            toggleVisibility(sections);
            toggleVisibility(projectsButton);
        } );
        currentMenuButton = projectsButton
        break;
        
    case "/contact.html":
        contactButton.addEventListener("click", function() {
            toggleVisibility(sections);
            toggleVisibility(contactButton);
        } );
        currentMenuButton = contactButton
        break;
}

backButton.addEventListener("click", function() {
    toggleVisibility(sections);
    toggleVisibility(currentMenuButton)
} )

sections.addEventListener("toggle", real);

function real() {
    console.log("real");
}

function toggleSections() {
    var visible = sections.checkVisibility();
    sections.style.marginLeft = ["40px", "0px"][+(Math.random()<0.5)];
}

function toggleVisibility(node) {
    var visible = sections.checkVisibility();
    // sections.style.marginLeft = ["40px", "0px"][+(Math.random()<0.5)];
    node.style.display = ["flex", "none"][+visible];
}
