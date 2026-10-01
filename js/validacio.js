// Funció per validar el format de l'email
// Ha de tenir: nom @ domini . extensió
function emailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ---- VALIDACIÓ REGISTRE ----
const btnRegistre = document.getElementById('btn-registre');

if (btnRegistre) {
    btnRegistre.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirm = document.getElementById('confirm').value;
        const error = document.getElementById('error-registre');

        // Comprovem email
        if (!emailValid(email)) {
            error.textContent = 'El correu electrònic no és vàlid. Ha de tenir el format nom@domini.ext';
            error.style.display = 'block';
            return;
        }

        // Comprovem que les contrasenyes coincideixen
        if (password !== confirm) {
            error.textContent = 'Les contrasenyes no coincideixen.';
            error.style.display = 'block';
            return;
        }

        // Tot correcte
        error.style.display = 'none';
        alert('Registre completat correctament!');
    });
}

// ---- VALIDACIÓ CONTACTE ----
const btnContacte = document.getElementById('btn-contacte');

if (btnContacte) {
    btnContacte.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const error = document.getElementById('error-contacte');

        // Comprovem email
        if (!emailValid(email)) {
            error.textContent = 'El correu electrònic no és vàlid. Ha de tenir el format nom@domini.ext';
            error.style.display = 'block';
            return;
        }

        // Tot correcte
        error.style.display = 'none';
        alert('Missatge enviat correctament!');
    });
}