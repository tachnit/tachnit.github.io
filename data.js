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
        {
            name: "Boolean Logic",
            notes: [],
            content: [
            `x = 3`,
            `y = 10`,
            `if x == 3 and y == 4{`,
            `   print("AND gate")`,
            `if x == 3 or y == 4:`,
            `   print("OR gate")`,
            ],
            console: [
                `"OR gate"`,
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
            notes: ["This is avoided by most Ruby programmers, beacuse the temporary 'x' variable will continue to persist outside the loop."],
            content: [
                `for x in 2..4 do`,
                `   puts x`,
                `end`,
            ],
            console: [
                `2`,
                `3`,
                `4`
            ]
        },
        {
            name: "Each Loop",
            notes: [],
            content: [
                `[1, 2, 3].each do |number|`,
                `   puts number `,
                `end`
            ],
            console: [
                `1`,
                `2`,
                `2`
           ]
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
        {
            name: "Array",
            notes: [],
            content: [
                `x = [true, "Orange", 9]`,
                `puts x[1]`,
            ],
            console: [
                `"Orange"`,
            ],
        },
        {
            name: "Function",
            notes: [],
            content: [
                `def myfunction(name):`,
                `   return "My name is " + name`,
                `end`,
                `puts myfunction("harris")`,
            ],
            console: [
                `"My name is Harris"`,
            ],
        },
        {
            name: "While Loop",
            notes: [],
            content: [
                `x = 3`,
                `while x < 5`,
                `   puts x`,
                `   x = x + 1`,
            ],
            console: [
                `3`,
                `4`,
            ],
        },
        {
            name: "Boolean Logic",
            notes: [],
            content: [
            `x = 3`,
            `y = 10`,
            `if x == 3 && y == 4`,
            `   print("AND gate")`,
            `end`,
            `if x == 3 || y == 4`,
            `   print("OR gate")`,
            `end`,
            ],
            console: [
                `"OR gate"`,
            ],
        },
        {
            name: "Map",
            notes: [],
            content: [
            `arr = [1, 2, 3]`,
            `arr.map {|x| x + 5}`,
            `puts arr`,
            ],
            console: [
                `[6, 7, 8]`,
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
            `   console.log("AND gate");`,
            `}`,
            `if((x == 3) || (y == 4)){`,
            `   console.log("OR gate");`,
            `}`,
            ],
            console: [
                `"OR gate"`,
            ],
        },
        {
            name: "Map",
            notes: [],
            content: [
            `var arr = [1, 2, 3];`,
            `arr = arr.map(x => x + 5);`,
            `console.log(arr);`,
            ],
            console: [
                `[6, 7, 8]`,
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
        {
            name: "Switch Statement",
            notes: [],
            content: [
            `var x = 6;`,
            `switch(x){`,
            `   case 5:`,
            `       printf("five");`,
            `       break;`,
            `   case 6:`,
            `       printf("six");`,
            `       break;`,
            `   default:`,
            `       printf("a number");`,
            `}`,
            ],
            console: [
                `"six"`,
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
            name: "While Loop",
            notes: [],
            content: [
                `int x = 0;`,
                `while (x < 3){`,
                `   System.out.println(x);`,
                `   x = x + 1;`,
                `}`,
           ],
           console: [
                `0`,
                `1`,
                `2`,
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
        {
            name: "Boolean Logic",
            notes: [],
            content: [
            `int x = 3;`,
            `int y = 10;`,
            `if((x == 3) && (y == 4)){`,
            `   System.out.println("AND gate");`,
            `}`,
            `if((x == 3) || (y == 4)){`,
            `   System.out.println("OR gate");`,
            `}`,
            ],
            console: [
                `"OR gate"`,
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
    "go": [
        {
            name: "If Statement",
            notes: [],
            content: [
                `var x = 4`,
                `if x > 5 {`,
                `   fmt.Println("hello")`,
                `}`,
                `else if x > 3 {`,
                `   fmt.Println("hola")`,
                `}`,
                `else{`,
                `   fmt.Println("bonjour")`,
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
                `for x := 2; x < 5; x++ {`,
                `   fmt.Println(x)`,
                `}`,
            ],
            console: [
                `2`,
                `3`,
                `4`,
            ],
        },
        {
            name: "Boolean Logic",
            notes: [],
            content: [
            `var x = 3`,
            `var y = 10`,
            `if x == 3 && y == 4 {`,
            `   fmt.Println("AND gate")`,
            `}`,
            `if x == 3 || y == 4 {`,
            `   fmt.Println("OR gate")`,
            `}`,
            ],
            console: [
                `"OR gate"`,
            ],
        },
    ],
};
