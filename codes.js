const pythonCodes = {
    button1: `Button s;
    EditText m, ph;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        m = findViewById(R.id.msg);
        ph = findViewById(R.id.phone);
        s = findViewById(R.id.send);
        s.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String me = m.getText().toString();
                String p = ph.getText().toString();
                SmsManager sms = SmsManager.getDefault();
                sms.sendTextMessage(p,null,me,null,null);
                Toast.makeText(MainActivity.this, "message sent", Toast.LENGTH_SHORT).show();
            }
        });
    }
}`,

    button2: `import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.bind(('localhost', 7999))
print("Server is running")
while True:
    data, addr = s.recvfrom(1024)
    msg = data.decode().upper()
    s.sendto(msg.encode(), addr)


import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_addr = ('localhost', 7999)
while True:
    msg = input("Enter message (or 'END' to stop): ")
    if msg == "END":
        break
    s.sendto(msg.encode(), server_addr)
    print("Server:", s.recv(1024).decode())

s.close()`,

    button3: `import time
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
    leaky_bucket(pkt_size, output_rate)`,
        
    button4: `import socket

s = socket.socket()
s.bind(('localhost', 2111))
s.listen(1)

conn, _ = s.accept()

while True:
    data = conn.recv(1024).decode() 
    if data.lower() == "goodbye":
        break   
    print("Client:", data)    
    reply = input("Reply: ")   
    conn.send(reply.encode())
conn.close()

import socket

s = socket.socket()
s.connect(('localhost', 2111))

while True:
    msg = input("Message to server: ")
    s.send(msg.encode())
    if msg.lower() == "goodbye":
        break
    print("Server:", s.recv(1024).decode())
s.close()`,
        
    button5: `//RECEIVER
import socket

s = socket.socket()
s.bind(('localhost', 6869))
s.listen(1)
conn, _ = s.accept()
data = conn.recv(1024).decode()
unstuffed = data[8:-8].replace('111110', '11111')
print("Unstuffed data:", unstuffed)
conn.close()

//SENDER
import socket

s = socket.socket()
s.connect(('localhost', 6869))
data = input("Enter binary data: ")
stuffed = "01111110" + data.replace('11111', '111110') + "01111110"
s.send(stuffed.encode())
print("Stuffed data sent:", stuffed)
s.close()`,
    
    button6: `n = int(input("Enter number of nodes: "))
dmat = [[int(input(f"Cost between node {i+1} and node {j+1}: ")) for j in range(n)] for i in range(n)]
dist = [dmat[i][:] for i in range(n)]

for _ in range(n-1):
    for i in range(n):
        for j in range(n):
            dist[i][j] = min(dist[i][j], min(dist[i][k] + dist[k][j] for k in range(n)))

print("Distance table:")
for i, row in enumerate(dist):
    print(f"Node {i+1}: {row}")`,
    
    button7: `def xor(a, b):
    return ''.join('0' if i == j else '1' for i, j in zip(a, b))

def crc(data, gen):
    code = data + '0' * (len(gen) - 1)
    for i in range(len(data)):
        if code[i] == '1':
            code = code[:i] + xor(code[i:i+len(gen)], gen) + code[i+len(gen):]
    return code[-(len(gen)-1):]

data = input("Enter data: ")
gen = input("Enter generator polynomial: ")
transmitted = data + crc(data, gen)
print("Transmitted code:", transmitted)

received = input("Enter received code to check for errors: ")
print("No errors" if crc(received, gen) == '0' * (len(gen)-1) else "Errors detected")
`
};
