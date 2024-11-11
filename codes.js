const pythonCodes = {
    button1: `def sender():
    res = ""
    n = int(input("Enter number of frames: "))
    for i in range(n):
        frame = input(f"Enter frame {i + 1}: ")
        res += f"{len(frame)}{frame}"
    print("Final message:", res)
    return res

def receiver(res):
    print("Received frames:")
    i = 0
    while i < len(res):
        len_frame = int(res[i])
        print(res[i + 1:i + 1 + len_frame])
        i += 1 + len_frame

# Calling the functions
res = sender()
receiver(res)`,

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

    button3: 'import time
import random

def leaky_bucket(pkt_size, output_rate):
    if pkt_size > 512:
        print("Bucket overflow")
    else:
        while pkt_size > output_rate:
            print(f"{output_rate} bytes sent")
            pkt_size -= output_rate
            time.sleep(0.1)
        if pkt_size > 0:
            print(f"{pkt_size} bytes sent")

output_rate = int(input("Enter output rate: "))
n = int(input("Enter number of packets: "))

for i in range(n):
    pkt_size = random.randint(1, 1000)
    print(f"Packet {i+1} size: {pkt_size}")
    leaky_bucket(pkt_size, output_rate)
',
    button4: "# Python code for Button 4",
    button5: "# Python code for Button 5",
    button6: "# Python code for Button 6",
    button7: "# Python code for Button 7"
};
