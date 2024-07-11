document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('.bi-eye');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', function (e) {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // Toggle the eye icon
        this.classList.toggle('bi-eye-slash');
    });
});
