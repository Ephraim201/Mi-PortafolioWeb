document.addEventListener('DOMContentLoaded', function() {
    const defaultSection = '#yo';

    function scrollToSection(sectionId) {
        const element = document.querySelector(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2),
                behavior: 'smooth'
            });
        }
    }

    const hash = window.location.hash || defaultSection;
    scrollToSection(hash);

    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });
});

/* -------------------------------------*/
const baseText = "Desarrollador Web en Formación | Enfocado en ";
const textArray = [" Full-stack ", " Python ", " .NET "];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const target = document.getElementById('typewriter');
    
    let textToShow = baseText + (textArray[index] || '');
    
    if (isDeleting) {
        currentText = textToShow.substring(0, charIndex--);
    } else {
        currentText = textToShow.substring(0, charIndex++);
    }

    target.innerHTML = currentText;

    if (!isDeleting && charIndex === textToShow.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === baseText.length) {
        isDeleting = false;
        index = (index + 1) % textArray.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

document.addEventListener('DOMContentLoaded', type);

    /* -------------------------------------*/

    const sounds = ['sound/1.mp3', 'sound/2.mp3', 'sound/3.mp3'];

    function playRandomSound() {
        const randomIndex = Math.floor(Math.random() * sounds.length);
        const selectedSound = sounds[randomIndex];

        const audio = new Audio(selectedSound);
        audio.play();
    }

    const buttons = document.querySelectorAll('.circle-button');

    buttons.forEach(button => {
        button.addEventListener('click', playRandomSound);
    });


/* -------------------------------------*/

const darkModeToggle = document.getElementById('dark-mode-toggle');

const isDarkMode = localStorage.getItem('dark-mode') === 'true';

if (isDarkMode) {
    document.body.classList.add('dark-mode');
    updateImagesForDarkMode();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', darkModeEnabled);

    updateImagesForDarkMode();
}

function updateImagesForDarkMode() {
    const images = document.querySelectorAll('.profile img');
    images.forEach(img => {
        const darkImage = img.getAttribute('data-dark');
       
        if (document.body.classList.contains('dark-mode')) {
            img.dataset.originalSrc = img.src;
            img.src = darkImage;
        } else {
            img.src = img.dataset.originalSrc || img.src; 
        }
    });
}

darkModeToggle.addEventListener('click', toggleDarkMode);

/* -------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    const profilePic = document.getElementById('profile-pic');
    
    let isDarkMode = false;

    darkModeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode; 

        if (isDarkMode) {
            profilePic.src = profilePic.getAttribute('data-dark');
        } else {
            profilePic.src = "img/foto.jpg"; 
        }

        darkModeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
    });
});


/* -------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('li a');

    const clickSound = document.getElementById('click-sound');

    clickSound.volume = 0.5; 

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            clickSound.currentTime = 0;

            clickSound.play();
        });
    });
});
