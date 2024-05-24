document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    document.getElementById('loginTab').addEventListener('click', () => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    document.getElementById('signupTab').addEventListener('click', () => {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    loginForm.querySelector('form').addEventListener('submit', handleLogin);
    signupForm.querySelector('form').addEventListener('submit', handleSignup);
});

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'themeChoice.html';
        } else {
            document.getElementById('loginErrorMessage').textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'themeChoice.html';
        } else {
            document.getElementById('signupErrorMessage').textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
