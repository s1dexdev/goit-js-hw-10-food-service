const refs = {
    bodyRef: document.querySelector('body'),
    themeToggleRef: document.querySelector('.theme-switch__toggle'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkThemeColor();

refs.themeToggleRef.addEventListener('change', changeTheme);

function changeTheme(event) {
    if (event.target.checked) {
        refs.bodyRef.classList.add(Theme.DARK);
        refs.bodyRef.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', 'dark-theme');
        
    } else {
        refs.bodyRef.classList.add(Theme.LIGHT);
        refs.bodyRef.classList.remove(Theme.DARK);
        localStorage.removeItem('theme', 'dark-theme');
    }
}

function checkThemeColor() {
    if (localStorage.getItem('theme') === 'dark-theme') {
    refs.themeToggleRef.checked = true;
    refs.bodyRef.classList.add(Theme.DARK);
    } else {
        return;
    }
}