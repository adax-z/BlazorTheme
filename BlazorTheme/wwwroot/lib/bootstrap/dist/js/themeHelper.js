window.themeHelper = {
    setTheme: function (theme) {
        // Remove old class, add new class
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    },
    getTheme: function () {
        return localStorage.getItem('theme') || 'light-mode';
    }
};