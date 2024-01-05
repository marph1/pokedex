const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', modeToggle.checked);
    const modeLabel = document.getElementById('modeLabel');
    modeLabel.textContent = modeToggle.checked ? 'Light mode' : 'Dark mode';
});

document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        modeToggle.checked = true;
    }
});

modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
