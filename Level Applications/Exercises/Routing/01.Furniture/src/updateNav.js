const token = sessionStorage.getItem('token');

export function updateNavigation() {
    if (sessionStorage.getItem('token') != null) {
        document.getElementById('user').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline';
    }
}