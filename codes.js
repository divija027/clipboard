const pythonCodes = {
    button1: `import socket
# Client Code for TCP connection
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 3000))
client_socket.send("Hello from client!".encode())
response = client_socket.recv(1024).decode()
print("Server response:", response)
client_socket.close()

# Server Code for TCP connection
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 3000))
server_socket.listen(1)
connection, client_address = server_socket.accept()
data = connection.recv(1024).decode()
print("Received from client:", data)
connection.send("Hello from server!".encode())
connection.close()
server_socket.close()`,

    button2: `import socket
# UDP Client
client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
client_socket.sendto("Hello from UDP client!".encode(), ('localhost', 3001))
data, server_address = client_socket.recvfrom(1024)
print("Received from server:", data.decode())
client_socket.close()

# UDP Server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(('localhost', 3001))
data, client_address = server_socket.recvfrom(1024)
print("Received from client:", data.decode())
server_socket.sendto("Hello from UDP server!".encode(), client_address)`,

    button3: "# Python code for Button 3",
    button4: "# Python code for Button 4",
    button5: "# Python code for Button 5",
    button6: "# Python code for Button 6",
    button7: "# Python code for Button 7"
};
