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

function password_check(password) {
    let haveNumber = false;
    let haveLetter = false;
    let haveSymbol = false;
    for (let i = 0; i < password.length; i++) {
        const character = password[i];
        if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
            haveLetter = true;
        } else if (character >= '0' && character <= '9') {
            haveNumber = true;
        } else if (character !== ' ') {
            haveSymbol = true;
        }
    }
    return haveLetter && haveNumber && haveSymbol && password.length > 8;
}

function email_check(email) {
    let haveaddsymbol = false;

    for (let i = 0; i < email.length; i++) { 
        const character = email[i];
        if (character === '@') haveaddsymbol = true;
    }
    return haveaddsymbol && (email.endsWith('.com') || email.endsWith('.co.id'));
}

function check() {
    const username_ori = document.getElementById('username');
    const username = username_ori.value;

    const password_ori = document.getElementById('password');
    const password = password_ori.value;

    const age_ori = document.getElementById('age');
    const age1 = age_ori.value;

    const Female = document.getElementById('GenderF');
    const male = document.getElementById('GenderM');

    const email_ori = document.getElementById('email');
    const email = email_ori.value;

    const error_text = document.getElementById('error_text');

    if (username === '') {
        error_text.textContent = "Username Cannot be Empty";
        return;
    }

    if(password === ''){
        error_text.textContent = "Password Cannot be Empty";
        return;
    }
    else if (!password_check(password)) {
        error_text.textContent = "Password must have a symbol, a number, a letter, and minimum of 8 characters";
        return;
    }

    let age = Number(age1);
    if (age1 === '') {
        error_text.textContent = "Age Cannot be Empty";
        return;
    } else if (age < 0 || age > 122) {
        error_text.textContent = "Age must be reasonable";
        return;
    }

    if (!(male.checked || Female.checked)) {
        error_text.textContent = "Please Choose your Gender";
        return;
    }
    // alert("ehe");
    if (email === '') {
        error_text.textContent = "Email Cannot be Empty";
        return;
    } else if (!email_check(email)) {
        error_text.textContent = "Email must be Valid";
        return;
    }

    error_text.textContent = "";
    alert('Register success');
    window.location.href = "home.html";
}

document.getElementById('sign_button').onclick = function(event) {
    event.preventDefault();
    check();
};
