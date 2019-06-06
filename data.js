var code = {
    "python": [
        {
            name: "If Statement",
            notes: [],
            content: [
                `x = 4`,
                `if x > 5:`,
                `   print("hello")`,
                `elif x > 3:`,
                `   print("hola")`,
                `else:`,
                `   print("bonjour")`,
            ],
            console: [
                `"hola"`,
            ],
        },
        {
            name: "For Loop",
            notes: [],
            content: [
                `for x in range(2,5):`,
                `   print(x)`,
            ],
            console: [
                `2`,
                `3`,
                `4`,
            ],
        },
        {
            name: "While Loop",
            notes: [],
            content: [
                `x = 0`,
                `while x < 3:`,
                `   print(x)`,
                `   x = x + 1`,
           ],
           console: [
                `0`,
                `1`,
                `2`,
            ],
        },
        {
            name: "Tuple",
            notes: [],
            content: [
                `x = ("A", "B", "C")`,
               `print(x[1])`,
            ],
            console: [
                `"B"`,
            ],
        },
        {
            name: "Array",
            notes: [],
            content: [
            `x = ["A", "B", "C"]`,
            `print(x[2])`,
            ],
            console: [
                `"C"`,
            ],
        },
        {
            name: "Set",
            notes: [],
            content: [
                `x = {"A", "B", "C"}`,
                `print(len(x))`,
            ],
            console: [
                "3",
            ],
        },
        {
            name: "Dictionary",
            notes: [],
            content: [
                `person = {`,
                `   "name": "Harris",`,
                `   "country": "USA",`,
                `   "height": "5'11",`,
                `}`,
                `print(person["height"])`,
                `print(len(person))`,
            ],
            console: [
                `"5'11"`,
                `3`,
            ],
        },
        {
            name: "Function",
            notes: [],
            content: [
                `def myfunction():`,
                `   print("I code")`,
                `myfunction()`,
            ],
            console: [
                `"I code"`,
            ],
        },
    ],
    "ruby": [
        {
            name: "If Statement",
            notes: [],
            content: [
                `x = 4`,
                `if x > 5`,
                `   puts "hello"`,
                `elsif x > 3`,
                `   puts "hola"`,
                `else`,
                `   puts "bonjour"`,
                `end`,
            ],
            console: [
                `"hola"`,
            ],
        },
        {
            name: "For Loop",
            notes: [],
            content: [
                `for x in 2..4 do`,
                `   puts x`,
                `end`,
            ],
            console: [
                `2`,
                `3`,
                `4`,
            ],
        },
        {
            name: "Until Loop",
            notes: [],
            content: [
                `x = 3`,
                `until x == 5`,
                `   puts x`,
                `   x = x + 1`,
            ],
            console: [
                `3`,
                `4`,
            ],
        },
        {
            name: "Unless Statement",
            notes: [],
            content: [
            `x = 5`,
            `unless x > 10`,
            `   puts "success"`,
            `else`,
            `   puts "failure"`,
            `end`
            ],
            console: [
                `"success"`,
            ],
        },
    ],
    "javascript": [
        {
            name: "If Statement",
            notes: [],
            content: [
                `var x = 4;`,
                `if(x > 5){`,
                `   console.log("hello");`,
                `}`,
                `else if(x > 3){`,
                `   console.log("hola");`,
                `}`,
                `else{`,
                `   console.log("bonjour");`,
                `}`,
            ],
            console: [
                `"hola"`,
            ],
        },
        {
            name: "For Loop",
            notes: [],
            content: [
                `for(var x = 2; x < 5; x++){`,
                `   console.log(x);`,
                `}`,
            ],
            console: [
                `2`,
                `3`,
                `4`,
            ],
        },
        {
            name: "Array",
            notes: [],
            content: [
                `var x = [5, "Apple", true];`,
                `console.log(x[2]);`,
            ],
            console: [
                `true`,
            ],
        },
        {
            name: "Switch Statement",
            notes: [],
            content: [
            `var x = 5;`,
            `switch(x){`,
            `   default:`,
            `       console.log("a number");`,
            `       break;`,
            `   case 5:`,
            `       console.log("five");`,
            `       break;`,
            `   case 6:`,
            `       console.log("six");`,
            `       break;`,
            `}`,
            ],
            console: [
                `"five"`,
            ],
        },
        {
            name: "Boolean Logic",
            notes: [],
            content: [
            `var x = 3;`,
            `var y = 10;`,
            `if((x == 3) && (y == 4)){`,
            `   console.log("AND gateway");`,
            `}`,
            `if((x == 3) || (y == 4)){`,
            `   console.log("OR gateway");`,
            `}`,
            ],
            console: [
                `"OR gateway"`,
            ],
        },
    ],
    "c": [
        {
            name: "If Statement",
            notes: [],
            content: [
                `int x = 4;`,
                `if (x > 5){`,
                `   printf("hello");`,
                `}`,
                `else if(x > 3){`,
                `   printf("hola");`,
                `}`,
                `else{`,
                `   printf("bonjour");`,
                `}`,
            ],
            console: [
                `"hola"`,
            ],
        },
        {
            name: "For Loop",
            notes: [],
            content: [
                `for(int x = 2; x < 5; x++){`,
                `   printf(x);`,
                `}`,
            ],
            console: [
                `2`,
                `3`,
                `4`,
            ],
        },
        {
            name: "Array",
            notes: [],
            content: [
                `double x[] = {5.2, 6.4, 7.6};`,
                `printf(x[2]);`,
            ],
            console: [
                `7.6`,
            ],
        },
    ],
    "java": [
        {
            name: "If Statement",
            notes: [],
            content: [
                `int x = 4;`,
                `if(x > 5){`,
                `   System.out.println("hello");`,
                `}`,
                `else if(x > 3){`,
                `   System.out.println("hola");`,
                `}`,
                `else{`,
                `   System.out.println("bonjour");`,
                `}`,
            ],
            console: [
                `"hola"`,
            ],
        },
        {
            name: "For Loop",
            notes: [],
            content: [
                `for(int x = 2; x < 5; x++){`,
                `   System.out.println(x);`,
                `}`,
            ],
            console: [
                `2`,
                `3`,
                `4`,
            ],
        },
        {
            name: "Array",
            notes: [],
            content: [
                `double[] x = {5.2, 6.4, 7.6};`,
                `System.out.println(x[2]);`,
            ],
            console: [
                `7.6`,
            ],
        },
    ],
    "php": [
        {
            name: "If Statement",
            notes: [],
            content: [
                `$x = 4;`,
                `if($x > 5){`,
                `   echo "hello";`,
                `}`,
                `elseif($x > 3){`,
                `   echo "hola";`,
                `}`,
                `else{`,
                `   echo "bonjour";`,
                `}`,
            ],
            console: [
                `"hola"`,
            ],
        },
        {
            name: "For Loop",
            notes: [],
            content: [
                `for($x = 2; $x < 5; $x++){`,
                `   echo $x;`,
                `}`,
            ],
            console: [
                `2`,
                `3`,
                `4`,
            ],
        },
        {
            name: "Array",
            notes: [],
            content: [
                `$x = array(5.2, 6.4, 7.6);`,
                `echo $x[2];`,
            ],
            console: [
                `7.6`,
            ],
        },
    ],
    "perl": [
        {
            name: "If Statement",
            notes: [],
            content: [
                `$x = 4;`,
                `if($x > 5){`,
                `   print("hello\\n");`,
                `}`,
                `else if($x > 3){`,
                `   print("hola\\n");`,
                `}`,
                `else{`,
                `   print("bonjour\\n");`,
                `}`,
            ],
            console: [
                `"hola"`,
            ],
        },
        {
            name: "For Loop",
            notes: [],
            content: [
                `for($x = 2; $x < 5; $x++){`,
                `   print(x);`,
                `}`,
            ],
            console: [
                `2`,
                `3`,
                `4`,
            ],
        },
        {
            name: "Array",
            notes: [],
            content: [
                `@x = (14, 6.4, "Hello");`,
                `print($x[2]);`,
            ],
            console: [
                `"Hello"`,
            ],
        },
    ],
    "brightscript": [
        {
            name: "If Statement",
            notes: [],
            content: [
                `x = 4`,
                `if x > 5 then`,
                `   print "hello"`,
                `elseif x > 3 then`,
                `   print "hola"`,
                `else`,
                `   print "bonjour"`,
                `end if`,
            ],
            console: [
                `"hola"`,
            ],
        },
        {
            name: "For Loop",
            notes: [],
            content: [
                `for x = 2 to 4 step 1`,
                `   print x`,
                `end for`,
            ],
            console: [
                `2`,
                `3`,
                `4`,
            ],
        },
        {
            name: "Array",
            notes: [],
            content: [
                `x = [14, 6.4, "Hello"]`,
                `print x[2]`,
            ],
            console: [
                `"Hello"`,
            ],
        },
    ],
};
