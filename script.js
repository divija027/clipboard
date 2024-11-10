function copyPythonCode(button) {
    let pythonCode;

    if (button === 'Button 1') {
        pythonCode = `import socket
# Client code
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 3000))
client_socket.send("Hello from client!".encode())
response = client_socket.recv(1024).decode()
print("Server response:", response)
client_socket.close()

# Server code
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 3000))
server_socket.listen(1)
connection, client_address = server_socket.accept()
data = connection.recv(1024).decode()
print("Received from client:", data)
connection.send("Hello from server!".encode())
connection.close()
server_socket.close()`;
    } else if (button === 'Button 2') {
        pythonCode = `import socket
# UDP Client code
client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
client_socket.sendto("Hello from UDP client!".encode(), ('localhost', 3001))
data, server_address = client_socket.recvfrom(1024)
print("Received from server:", data.decode())
client_socket.close()

# UDP Server code
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(('localhost', 3001))
data, client_address = server_socket.recvfrom(1024)
print("Received from client:", data.decode())
server_socket.sendto("Hello from UDP server!".encode(), client_address)`;
    } else if (button === 'Button 3') {
        pythonCode = "# Python code for Button 3";
    } else if (button === 'Button 4') {
        pythonCode = "# Python code for Button 4";
    } else if (button === 'Button 5') {
        pythonCode = "# Python code for Button 5";
    } else if (button === 'Button 6') {
        pythonCode = "# Python code for Button 6";
    } else if (button === 'Button 7') {
        pythonCode = "# Python code for Button 7";
    }

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = pythonCode;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    try {
        const successful = document.execCommand('copy');
        document.getElementById("message").innerText = successful ? "Python code copied to clipboard!" : "Failed to copy code.";
    } catch (err) {
        document.getElementById("message").innerText = `Error copying code: ${err}`;
    }

    document.body.removeChild(tempTextArea);

    setTimeout(() => {
        document.getElementById("message").innerText = "";
    }, 3000);
}
