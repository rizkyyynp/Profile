const menuIcon = document.getElementById("list-icon");
const menuList = document.getElementById("list-navi");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});