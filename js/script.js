// preloader



window.addEventListener("load", () => {
    const preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 800);

    // Home Animation
    var homeImg = document.querySelector(".home-img");
    homeImg.style.right = "50%";
    var homeText = document.querySelector(".home-text");
    homeText.style.left = "-50%";
});

//scrolling

const aboutSection = document.getElementById("about");
const aboutImg = document.querySelector(".about-img");
const aboutText = document.querySelector(".about-text");
const servicesSection = document.getElementById("services");
const servicesItem = document.querySelectorAll(".services-item");
const aboutOuterHeight = aboutSection.offsetHeight;
const servicesOuterHeight = servicesSection.offsetHeight;


window.addEventListener("scroll", () => {
   
    //window scroll top
    const windowScrollTop = this.scrollY;

    if (windowScrollTop >= aboutOuterHeight) {
        aboutText.style.cssText = "left: 0; opacity: 1;";
        aboutImg.style.cssText = "right: 0; opacity: 1;";
    }

    if (windowScrollTop >= servicesOuterHeight + servicesSection.offsetHeight) {
        servicesItem.forEach(function (item) {
            setTimeout(function () {
                item.style.cssText = "top: 0; opacity: 1;";
            }, 200);
        });
    }

});
// header bg reveal
const headerBg = () => {
    const header = document.querySelector(".js-header");
    window.addEventListener('scroll', function () {
        if (this.scrollY > 0) {
            header.classList.add('bg-reveal')
        } else {
            
            header.classList.remove('bg-reveal')
        }
    })
}
headerBg();

// style switcher 
// theme color
const themeColor = () => {
   const hueSlider = document.querySelector(".js-hue-slider");
   const html = document.querySelector("html");

   const setHue = (value) => {

        html.style.setProperty("--hue", value);
        document.querySelector(".js-hue").innerHTML = value;

   }
   
   hueSlider.addEventListener("input", function () {
        setHue(this.value);
        localStorage.setItem("--hue", this.value);
   });

   const slider = (value) => {
    hueSlider.value = value;
   }
   if (localStorage.getItem("--hue") !== null) {
    setHue(localStorage.getItem("--hue"));
    slider(localStorage.getItem("--hue"));
   } else {
    const hue = getComputedStyle(html).getPropertyValue("--hue");
    setHue(hue);
    slider(hue.split(" ").join(""));
   }
}
themeColor();


// Theme light and dark mode

const themeLightDark = () => {

    darkModeCheckbox = document.querySelector(".js-dark-mode");

    const themeMode = function() {
        if (localStorage.getItem("theme-dark") === "true") {
            document.body.classList.add("t-dark");
        } else {
            document.body.classList.remove("t-dark");
        }
    };

    darkModeCheckbox.addEventListener("click", function() {
    
    localStorage.setItem("theme-dark", this.checked);

    themeMode();
    });

    if (localStorage.getItem("theme-dark") !== null) {
        themeMode();
    }

    if (document.body.classList.contains("t-dark")) {
        darkModeCheckbox.checked = true;
    }


};

themeLightDark();


// style switcher

const styleSwitcherToggle = () => {
    const styleSwitcher = document.querySelector(".js-style-switcher");
    const styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

    styleSwitcherToggler.addEventListener("click", function() {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");
        this.querySelector("i").classList.toggle("fa-cog");
    });
}
styleSwitcherToggle();

// const styleSwitcher = document.querySelector(".js-style-switcher");

// styleSwitcher.addEventListener("click", function () {

//     this.classList.toggle("open");
//     this.querySelector("i").classList.toggle("fa-times");
//     this.querySelector("i").classList.toggle("fa-cog");

// });

// nav

const navigation = () => {
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");
    const navItems = document.querySelector(".js-nav-item");

    const navToggle = () => {
        nav.classList.toggle("open");
        navToggler.classList.toggle("active");
    };

    navToggler.addEventListener("click", navToggle);

};

navigation();

// Scroll to top

let scrollToTop = document.querySelector(".js-scroll-to-top");

window.onscroll = function () {
    if (window.scrollY >= 500) {
        scrollToTop.style.display = "block";
    } else{
        scrollToTop.style.display = "none";
    }
}

scrollToTop.onclick = function () {
    window.scrollTo({left: "0", top: "0", behavior: "smooth"});
}
