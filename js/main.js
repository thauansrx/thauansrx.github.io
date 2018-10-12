const nav = document.querySelector("nav"),
    navToggle = document.querySelector(".fa-bars"),
    exitToggle = document.querySelector(".fa-times"),
    navList = document.querySelectorAll(".nav-li");
    navTags = document.querySelectorAll(".nav-a");

const toggleNavElements = action => {

    navList.forEach(element => {
        const checkClassList = !element.classList.contains("home");
        const checkAction = action === "show";
        if (checkClassList && checkAction) {
            element.classList.add("list-display");
            element.classList.remove("dn");
        } else if (checkClassList && !checkAction) {
            element.classList.add("dn");
            element.classList.remove("list-display");
        }
    });
};

const showMobileNav = ()=> {
  if(window.outerWidth <= 600) {
    navToggle.classList.add("di");
    navToggle.classList.remove("dn");
    toggleNavElements("hide");
  } else {
      navToggle.classList.add("dn");
      navToggle.classList.remove("di");
      exitToggle.classList.remove("di");
      exitToggle.classList.add("dn");
      toggleNavElements("show");
  }
}

const changeNavBg = ()=> {
    if (window.scrollY > 0) {
        nav.style = "background: #fff";
        navTags.forEach(element => {
            element.classList.add("--black");
            element.classList.remove("--white");
        });
    } else {
        navTags.forEach(element => {
            element.classList.remove("--black");
            element.classList.add("--white");
        });
        nav.style = "background: transparent";
    }
};


const toggleNav = (e)=> {
    e.target.classList.add("dn");
    e.target.classList.remove("di");
    if (e.target === navToggle) {
        exitToggle.classList.add("di");
        exitToggle.classList.remove("dn");
        toggleNavElements("show");
    } else {
        navToggle.classList.add("di");
        navToggle.classList.remove("dn");
        toggleNavElements("hide");
    }
};

window.onload = function () { showMobileNav(); };
window.onscroll = function () { changeNavBg(); };
window.onresize = function () { showMobileNav(); };
navToggle.onclick = function (e) {  toggleNav(e); };
exitToggle.onclick = function (e) {  toggleNav(e); };
