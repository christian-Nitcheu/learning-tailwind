let menu = document.getElementById("menu");
let menuList = document.getElementById("menuList");
let main = document.querySelector(".main");
menu.addEventListener("click", () => {
    menuList.classList.remove("-top-full");
    menuList.classList.add("top-0");
    console.log(menuList.classList);
    main.style.backgroundColor = "black";
    main.style.opacity = "0.25";
})

let closeMenuList = document.getElementById("closeMenuList");
closeMenuList.addEventListener("click", () => {
    menuList.classList.remove("top-0");
    menuList.classList.add("-top-full");
    main.style.backgroundColor = "transparent";
    main.style.opacity = "1";
});



// window.addEventListener("click", (e) => {
//     console.log(e.target);
//      if (e.target.id !== "menu" && e.target.id !== "closeMenuList") {
//         menuList.classList.remove("top-5");
//         menuList.classList.add("-top-full");
//      }
// })