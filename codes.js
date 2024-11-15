const pythonCodes = {
    button1: `def sender():
    res = ""
    n = int(input("Enter number of frames: "))
    for i in range(n):
        frame = input(f"Enter frame {i + 1}: ")
        res += f"{len(frame)}{frame}"
    print(f"The final message is: {res}")
    return res

def receiver(res):
    i = 0
    print("Received frames:")
    while i < len(res):
        len_frame = int(res[i])
        i += 1
        print(res[i:i + len_frame])
        i += len_frame

# Main function
res = sender()
receiver(res)
`,

    button2: `
def bit_stuffing(data):
    stuffed_data = ""
    count = 0
    for bit in data:
        if bit == '1':
            count += 1
            stuffed_data += bit
        else:
            count = 0
            stuffed_data += bit
        if count == 5:
            stuffed_data += '0'  
            count = 0
    return stuffed_data

# Bit decoding function
def bit_decoding(stuffed_data):
    decoded_data = ""
    count = 0
    for bit in stuffed_data:
        if bit == '1':
            count += 1
            decoded_data += bit
        else:
            if count == 5:
                
                count = 0
                continue
            count = 0
            decoded_data += bit
    return decoded_data

data = input("Enter the data (binary string): ")
stuffed_data = bit_stuffing(data)
print("Data after bit stuffing:", stuffed_data)
decoded_data = bit_decoding(stuffed_data)
print("Data after bit decoding:", decoded_data)

`,

    button3: `def div(num1, num2):
    n = len(num2)
    result = num1[:n]
    rem = ""
    
    
    for i in range(len(num2)):
        if result[i] == num2[i]:
            rem += "0"
        else:
            rem += "1"

    while n < len(num1):
        if rem[0] == '0':
            rem = rem[1:] + num1[n]
        else:
            rem = rem[1:] + num1[n]
            rem = div(rem, num2)
        n += 1
    
    result = rem
    rem = ""
    for i in range(len(num2)):
        if result[i] == num2[i]:
            rem += "0"
        else:
            rem += "1"
    return rem[1:]

def main():
    gen = input("Enter Generator: ")
    data = input("Enter Data: ")
    code = data

    
    while len(code) < (len(data) + len(gen) - 1):
        code += "0"
    
    
    code = data + div(code, gen)
    print("Transmitted code word:", code)
    
    
    rec = input("Please Enter the received code: ")
    if int(div(rec, gen)) == 0:
        print("The received code word contains no errors")
    else:
        print("The received code word contains errors")

if __name__ == "__main__":
    main()

`,

    button4: `def distance_vector_routing():
    
    n = int(input("Enter the number of nodes: "))
    
    
    dmat = []
    print("Enter the cost matrix:")
    for i in range(n):
        row = list(map(int, input(f"Row {i+1}: ").split()))
        row[i] = 0  # Set distance to self as 0
        dmat.append(row)
    
    
    dist = [[dmat[i][j] for j in range(n)] for i in range(n)]
    via = [[j for j in range(n)] for i in range(n)]
    
    
    updated = True
    while updated:
        updated = False
        for i in range(n):
            for j in range(n):
                for k in range(n):
                    # If a shorter path is found, update the distance and path
                    if dist[i][j] > dmat[i][k] + dist[k][j]:
                        dist[i][j] = dmat[i][k] + dist[k][j]
                        via[i][j] = k
                        updated = True
    
    
    for i in range(n):
        print(f"\nRouting table for node {i + 1}:")
        for j in range(n):
            print(f" To node {j + 1} via {via[i][j] + 1} with distance {dist[i][j]}")


if __name__ == "__main__":
    distance_vector_routing()

`,

    button5: `
import java.util.*;
public class leakybucket {
public static void flow(int pktsize , int output){
int bucketsize=512;
if(pktsize>bucketsize) {
System.out.println("Bucket overflow");
}else {
try {
Thread.sleep(10);
while(pktsize>output) {
System.out.println(output+"bytes outflow ");
pktsize=pktsize-output;
}
if(pktsize>0) {
System.out.println(pktsize+"bytes outflow");
}
}catch(InterruptedException e) {
System.out.println("Interrupted");
}
}
}
public static void main(String[]args) {
int output,pktsize,n;
Scanner input = new Scanner (System.in);
Random rand = new Random();
System.out.println("Enter output rate ");
output=input.nextInt();
System.out.println("Enter the number of packets");
n=input.nextInt();
for(int i=1;i<=n;i++) {
pktsize=rand.nextInt(1000);
System.out.println("packet no:"+i+"packet size="+pktsize);
flow(pktsize,output);
}
}
}
`,

    button6: `import socket
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
print("socket created!!!")
s.connect(("localhost",9999))
data=input("Enter ur name: ")
s.send(bytes(data,"utf-8"))
print("Data sent!!!")
response=s.recv(1024).decode()
print(response)
s.close()
#reciever
import socket
r=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
print("socket created!!!")
r.bind(("localhost",9999))
r.listen(3)
print("waiting for client!!!")
c,addr=r.accept()
data=c.recv(1024).decode()
print(f"received data: {data}")
c.send(bytes("data received by server!!!","utf-8"))
c.close()
r.close(

`,

    button7: `#sender
import socket
c=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
data=input("Enter the data: ")
c.sendto(bytes(data,"utf-8"),("localhost",9999))
print("Data sent to server!!!")
response,addr=c.recvfrom(1024)
print(response.decode())
c.close()
#reciever
import socket
s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
print("socket created!!!")
s.bind(("localhost",9999))
data,addr=s.recvfrom(1024)
print(f"data received: {data.decode()}")
s.sendto(bytes("Data received by server","utf-8"),addr)
s.close()
`,

    button8: `CheckBox c1, c2, c3, c4;
Button b;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    EdgeToEdge.enable(this);
    setContentView(R.layout.activity_main);
    c1 = findViewById(R.id.burger);
    c2 = findViewById(R.id.pizza);
    c3 = findViewById(R.id.noodles);
    c4 = findViewById(R.id.dosa);
    b = findViewById(R.id.menu);

    b.setOnClickListener(view -> {
        String li = "";
        int amt = 0;
        if (c1.isChecked()) {
            li += c1.getText().toString() + " ";
            amt += 100;
        }
        if (c2.isChecked()) {
            li += c2.getText().toString() + " ";
            amt += 150;
        }
        if (c3.isChecked()) {
            li += c3.getText().toString() + " ";
            amt += 120;
        }
        if (c4.isChecked()) {
            li += c4.getText().toString() + " ";
            amt += 80;
        }
        Toast.makeText(MainActivity.this, li, Toast.LENGTH_SHORT).show();
        Toast.makeText(MainActivity.this, "Total: " + amt, Toast.LENGTH_SHORT).show();
    });
}
`,

    button9: `TextView tv;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    EdgeToEdge.enable(this);
    setContentView(R.layout.activity_main);
    tv = findViewById(R.id.t);
    registerForContextMenu(tv);
}

@Override
public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
    super.onCreateContextMenu(menu, v, menuInfo);
    getMenuInflater().inflate(R.menu.optionsmenu, menu);
}

@Override
public boolean onContextItemSelected(@NonNull MenuItem item) {
    if (item.getItemId() == R.id.apple) {
        tv.setText("Apple selected");
    } else if (item.getItemId() == R.id.banana) {
        tv.setText("Banana selected");
    } else {
        tv.setText("Mango selected");
    }
    return super.onContextItemSelected(item);
}
`
};

