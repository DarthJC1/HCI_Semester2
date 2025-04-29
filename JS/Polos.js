let isAnimating = false;

function showSidebar() {
    if (isAnimating) return;
    isAnimating = true;

    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'flex';

    sidebar.classList.remove('slide-out');
    sidebar.classList.add('slide-in');

    const button1 = document.querySelector('#button1');
    button1.style.display = 'none';

    sidebar.addEventListener('animationend', function handler() {
        isAnimating = false;
        sidebar.removeEventListener('animationend', handler);
    });
}

function closeSidebar() {
    if (isAnimating) return;
    isAnimating = true;

    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('slide-in');
    sidebar.classList.add('slide-out');

    sidebar.addEventListener('animationend', function handler() {
        sidebar.style.display = 'none';
        sidebar.classList.remove('slide-out');
        isAnimating = false;
        sidebar.removeEventListener('animationend', handler);
    });

    const button1 = document.querySelector('#button1');
    button1.style.display = 'block';
}

function languange(){
    window.location.href="songdetail1CN.html";
}

function languange1(){
    window.location.href="songdetail1.html";
}