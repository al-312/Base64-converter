const convertToBase64 = () => {
    const inputText = document.getElementById("inputText").value;
    const output = document.getElementById("base64Output");
    try {
        output.value = btoa(inputText);
    } catch (e) {
        output.value = "Invalid input for Base64 encoding.";
    }
}

const convertToText = () => {
    const base64Text = document.getElementById("inputText").value;
    const output = document.getElementById("base64Output");
    try {
        output.value = atob(base64Text);
    } catch (e) {
        output.value = "Invalid Base64 input.";
    }
}

const copyToClipboard = () => {
    const output = document.getElementById("base64Output");
    output.select();
    navigator.clipboard.writeText(output.value);
    showStatusMessage("Copied to clipboard!");
}

const showStatusMessage = (message) => {
    const status = document.getElementById("statusMessage");
    status.textContent = message;
    status.classList.add("show");
    setTimeout(() => {
        status.classList.remove("show");
    }, 2000);
}
