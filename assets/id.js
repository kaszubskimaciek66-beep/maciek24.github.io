// 1. Obsługa przycisku "Zaloguj się"
var loginBtn = document.querySelector(".login");

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        // Pobieramy dane z adresu (imię, nazwisko, zdjęcie itp.)
        var params = window.location.search;
        
        // Przekierowanie do głównego ekranu
        // UPEWNIJ SIĘ, że plik w folderze nazywa się home.html (małymi literami)
        window.location.href = "home.html" + params;
    });
}

// 2. Obsługa oka (pokazywanie hasła)
var eye = document.querySelector(".eye");
var passwordInput = document.querySelector(".password_input");

if (eye && passwordInput) {
    eye.addEventListener('click', () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eye.classList.add("eye_close");
        } else {
            passwordInput.type = "password";
            eye.classList.remove("eye_close");
        }
    });
}
