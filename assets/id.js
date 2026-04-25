var params = new URLSearchParams(window.location.search);

// --- KONFIGURACJA HASŁA ---
// Pamiętaj, hasło MUSI być w cudzysłowie!
var MOJE_HASLO = "QAZxsw2"; 
// --------------------------

document.querySelector(".login").addEventListener('click', () => {
    // Sprawdzamy czy wpisane znaki (original) zgadzają się z MOJE_HASLO
    if (original === MOJE_HASLO) {
        toHome();
    } else {
        alert("Błędne hasło! Spróbuj ponownie.");
        // Czyścimy pola po błędzie
        var inputField = document.querySelector(".password_input");
        inputField.value = "";
        original = "";
    }
});

var welcome = "Dzień dobry!";
var date = new Date();
if (date.getHours() >= 18){
    welcome = "Dobry wieczór!"
}
document.querySelector(".welcome").innerHTML = welcome;

function toHome(){
    // Dodajemy .html i upewniamy się, że params są wysyłane jako string
    location.href = 'home.html?' + params.toString();
}

var input = document.querySelector(".password_input");
input.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        document.activeElement.blur();
        // Opcjonalnie: naciśnięcie Enter też próbuje zalogować
        document.querySelector(".login").click();
    }
})

var dot = "•";
var original = "";
var eye = document.querySelector(".eye");

input.addEventListener("input", () => {
    var value = input.value.toString();
    
    if (value.length < original.length){
        original = original.substring(0, value.length);
    } else {
        var char = value.substring(value.length - 1);
        original = original + char;
    }

    if (!eye.classList.contains("eye_close")){
        var dots = "";
        for (var i = 0; i < value.length - 1; i++){
            dots = dots + dot
        }
        input.value = dots + (value.length > 0 ? value.substring(value.length - 1) : "");
        
        delay(1500).then(() => {
            if (input.value.length > 0 && !eye.classList.contains("eye_close")){
                var finalDots = "";
                for (var j = 0; j < input.value.length; j++){
                    finalDots += dot;
                }
                input.value = finalDots;
            }
        });
    }
})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

eye.addEventListener('click', () => {
    var classlist = eye.classList;
    if (classlist.contains("eye_close")){
        // Widok kropek
        classlist.remove("eye_close");
        var dots = "";
        for (var i = 0; i < original.length; i++){
            dots = dots + dot
        }
        input.value = dots;
    } else {
        // Widok tekstu (hasła)
        classlist.add("eye_close");
        input.value = original;
    }
})
