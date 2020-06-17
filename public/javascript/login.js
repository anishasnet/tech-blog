document.getElementById('login').addEventListener('click', loginFormHandler);
async function loginFormHandler(event) {
    event.preventDefault();
    const username = document.getElementById('username-login').value.trim();
    // const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
            window.location.href = '/';
        }
    }
}