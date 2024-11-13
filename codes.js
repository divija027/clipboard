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

    button2: `Button b1,b2,b3,b4;
    TextView res;
    EditText n1,n2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        n1 = findViewById(R.id.num1);
        n2 = findViewById(R.id.num2);
        b1 = findViewById(R.id.add);
        b2 = findViewById(R.id.sub);
        b3 = findViewById(R.id.mul);
        b4 = findViewById(R.id.div);
        res = findViewById(R.id.t1);
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int a1 = Integer.parseInt(n1.getText().toString());
                int a2 = Integer.parseInt(n2.getText().toString());
                int result = a1 + a2;
                res.setText("Result:" +result);
            }
        });
        b2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int a1 = Integer.parseInt(n1.getText().toString());
                int a2 = Integer.parseInt(n2.getText().toString());
                int result = a1 - a2;
                res.setText("Result:" +result);
            }
        });
        b3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int a1 = Integer.parseInt(n1.getText().toString());
                int a2 = Integer.parseInt(n2.getText().toString());
                int result = a1 * a2;
                res.setText("Result:" +result);
            }
        });
        b4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int a1 = Integer.parseInt(n1.getText().toString());
                int a2 = Integer.parseInt(n2.getText().toString());
                if (a2 == 0) {
                    res.setText("Cannot divide by 0");
                }
                else {
                    int result = a1 / a2;
                    res.setText("Result:" + result);
                }
            }
        });

    }
}

Calculator`,

    button3: `RadioGroup r;
ConstraintLayout ly;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        r = findViewById(R.id.rg);
        ly = findViewById(R.id.l);
        r.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup radioGroup, int i) {
                if (i==R.id.red)
                    ly.setBackgroundColor(Color.RED);
                else if (i==R.id.green)
                    ly.setBackgroundColor(Color.GREEN);
                else
                    ly.setBackgroundColor(Color.BLUE);
            }
        });
    }
}

Radio button`,
        
    button4: `TextView t;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.optionsmenu,menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        t = findViewById(R.id.tv);
        int id = item.getItemId();
        if (id == R.id.settings){
            t.setText("Settings selected");
            //Toast.makeText(this, "Settings selected", Toast.LENGTH_SHORT).show();

        } else if (id == R.id.history) {
            //Toast.makeText(this, "History selected", Toast.LENGTH_SHORT).show();
            t.setText("History selected");
        }
        else {
            //Toast.makeText(this, "About selected", Toast.LENGTH_SHORT).show();
            t.setText("About selected");
        }
        return super.onOptionsItemSelected(item);
    }
}

Option menu`,
        
    button5: `ImageView i;
Button b;
int[] images = {R.drawable.elephnant, R.drawable.moon, R.drawable.rose};
int currentIndex = 0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        i = findViewById(R.id.image);
        b = findViewById(R.id.cb);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (currentIndex > 2)
                    currentIndex = 0;
                i.setImageResource(images[currentIndex]);
                currentIndex = currentIndex + 1;
            }
        });
    }
}

Multi image view`,
    
    button6: `Log.i("ActivityLc", "onCreate() method");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.i("ActivityLc", "onStart() method");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("ActivityLc", "onResume() method");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("ActivityLc", "onPause() method");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("ActivityLc", "onStop() method");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("ActivityLc", "onRestart() method");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.i("ActivityLc", "onDestroy() method");
    }
}

Activity lifecycle
`
    button7: `Button b;
    ConstraintLayout ly;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        b = findViewById(R.id.rc);
        ly = findViewById(R.id.l);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Random rn = new Random();
                int r = rn.nextInt(256);
                int g = rn.nextInt(256);
                int b = rn.nextInt(256);
                ly.setBackgroundColor(Color.rgb(r,g,b));
            }
        });
    }
}

Button/Myapplication
`
button8: `CheckBox c1, c2, c3, c4 ;
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
       b.setOnClickListener(new View.OnClickListener() {
           @Override
           public void onClick(View view) {
               String li = "";
               int amt = 0;
               if (c1.isChecked()) {
                   li = li + c1.getText().toString() + " ";
                   amt = amt + 100;
               }
.
.
.
Toast.makeText(MainActivity.this, li , Toast.LENGTH_SHORT).show();
               Toast.makeText(MainActivity.this, amt +"", Toast.LENGTH_SHORT).show();    

Checkbox

`

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
        if(item.getItemId() == R.id.apple){
            tv.setText("Apple selected");
        } else if (item.getItemId() == R.id.banana) {
            tv.setText("Banana selected");
        }
        else {
            tv.setText("Mango selected");
        }
        return super.onContextItemSelected(item);
    }
}

Context menu
`

button10: `ImageView iv;
    Button b;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        b = findViewById(R.id.capture);
        iv = findViewById(R.id.i);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(i,1);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 1 && resultCode == RESULT_OK){
            Bitmap t = (Bitmap) data.getExtras().get("data");
            iv.setImageBitmap(t);
        }
    }
}

Capture image
`

button11: `ImageView i;
Button b;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        i = findViewById(R.id.iv);
        b = findViewById(R.id.ch);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                i.setImageResource(R.drawable.image);
            }
        });
    }
}

Imageview
`
button12: `RadioGroup r;
    ConstraintLayout cl;
    Button b;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        r = findViewById(R.id.rg);
        cl = findViewById(R.id.ly);
        b = findViewById(R.id.cb);

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int i = r.getCheckedRadioButtonId();
                if (i == R.id.red){
                    cl.setBackgroundColor(Color.RED);
                } else if (i == R.id.blue) {
                    cl.setBackgroundColor(Color.BLUE);
                }
                else {
                    cl.setBackgroundColor(Color.GREEN);
                }
            }
        });
    }
}

Radioand button
`
};
