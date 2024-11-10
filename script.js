function copyPythonCode(buttonId) {
    const pythonCode = pythonCodes[buttonId];
    if (!pythonCode) {
        document.getElementById("message").innerText = "Code not found.";
        return;
    }

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = pythonCode;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); 

    try {
        document.execCommand("copy");
        document.getElementById("message").innerText = "Python code copied to clipboard!";
    } catch (err) {
        document.getElementById("message").innerText = `Error copying code: ${err}`;
    }

    document.body.removeChild(tempTextArea);

    setTimeout(() => {
        document.getElementById("message").innerText = "";
    }, 3000);
}
