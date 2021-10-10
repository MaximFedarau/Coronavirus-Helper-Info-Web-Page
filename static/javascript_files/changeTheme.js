/*const usersTheme = localStorage.getItem("theme")
console.log(usersTheme)
let usersBody = document.body
if (usersTheme==="dark") {
    usersBody.classList.toggle("dark-theme")
}
else {
    usersBody.classList.toggle("light-theme")
}
function changeThemeFunction() {
    localStorage.clear()
    if (usersTheme==="dark"){
        usersBody.classList.toggle("light-theme")
        localStorage.setItem("theme","light")}
    else {
        usersBody.classList.toggle("dark-theme")
        localStorage.setItem("theme","dark")
    }
    console.log(localStorage.getItem("theme"))
    location.reload()
}*/
function getTheme() {
    return localStorage.getItem('theme') || 'light';
}
function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

const colorScheme = document.querySelector('meta[name="color-scheme"]');
function applyTheme(theme) {
    document.body.className = theme;
    colorScheme.content = theme;
}

function rotateTheme(theme) {
    if (theme === 'light') {
        return 'dark'
    }
    return 'light';
}

const themeToggler = document.getElementById('theme-toggle');

// Mimic heavy load done by other JS scripts
setTimeout(() => {
    let theme = getTheme();
    applyTheme(theme);

    themeToggler.onclick = () => {
        const newTheme = rotateTheme(theme);
        applyTheme(newTheme);
        saveTheme(newTheme);

        theme = newTheme;

        themeToggler.color = "red"
    }
}, 100);