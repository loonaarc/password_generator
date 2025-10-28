function generate() {
    const length = document.getElementById("length").value;

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").innerText = password;
    document.getElementById("copyBtn").style.display = "block";
    document.getElementById("message").style.display = "None"
}

function copyToClipBoard() {
    const password = document.getElementById("password").innerText;
    navigator.clipboard.writeText(password).then(() => {
        document.getElementById("message").style.display = "block"
        document.getElementById("message").innerText = "Password copied to clipboard!";
    });
}