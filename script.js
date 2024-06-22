function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'mohammed' && password === 'mohammed') {
        const loginTime = new Date().toLocaleString();
        localStorage.setItem('loginTime', loginTime);
        window.location.href = 'welcome.html';
    } else {
        errorMessage.textContent = 'Ongeldige gebruikersnaam of wachtwoord';
    }
}

// Script to load blog post content based on the query parameter
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const posts = {
        '1': {
            title: 'Hoe je een tuin onderhoudt',
            content: 'Een gedetailleerde gids over hoe je je tuin kunt onderhouden...'
        },
        '2': {
            title: 'Reizen naar Japan',
            content: 'Alles wat je moet weten voor een geweldige reis naar Japan...'
        },
        '3': {
            title: 'De beste recepten voor de zomer',
            content: 'Ontdek de meest verfrissende recepten voor de zomer...'
        }
    };

    if (postId && posts[postId]) {
        document.getElementById('post-content').innerHTML = `
            <h2>${posts[postId].title}</h2>
            <p>${posts[postId].content}</p>
        `;
    } else {
        document.getElementById('post-content').innerHTML = '<p>Blogpost niet gevonden.</p>';
    }

    if (window.location.pathname.includes('welcome.html')) {
        const loginTime = localStorage.getItem('loginTime');
        if (loginTime) {
            document.getElementById('login-time').textContent = loginTime;
        }
    }
});
