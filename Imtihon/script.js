const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbarChange');
const navShrink = document.getElementById('navShrink');
const li = document.querySelectorAll('.links a')
const sec = document.querySelectorAll("section")
navToggle.addEventListener("click", ()=>{
    navbar.classList.toggle('navOpen')
    navbar.classList.remove('navbarChange')
}
);
function closeNav() {
    navbar.classList.remove('navOpen')
}
function gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}
window.addEventListener("scroll", ()=>{
    sec.forEach(section=>{
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            li.forEach(link=>{
                link.classList.remove('activeLink');
                document.querySelector('nav li a[href*=' + id + ']').classList.add('activeLink')
            }
            )
        }
    }
    )
}
)
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset == 0) {
        document.getElementById('gototop').style.display = 'none'
    } else {
        document.getElementById('gototop').style.display = 'flex'
    }
}
)
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 80) {
        navShrink.classList.add('shrink')
    } else {
        navShrink.classList.remove('shrink')
    }
}
)
function videoPlay() {
    if (document.querySelector("video").paused) {
        document.querySelector("video").play();
        document.querySelector('.playBtn').style.display = 'none'
    } else {
        document.querySelector("video").pause();
        document.querySelector('.playBtn').style.display = 'flex'
    }
}
