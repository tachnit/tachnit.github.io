var syntax = `:;,.{}[]() `.split("");
var operator = `+-*/<>=&|`.split("");
var keyword = ["if", "for", "in", "case", "while", "do", "else", "elif", "def", "elsif", "end", "until", "return", "switch", "break", "default", "unless", "console", "system", "out", "elseif","step", "to", "then", "and", "or", "fmt"];
var boolean = ["true", "false"];
var vartype = ["var", "char", "int", "float", "bool", "boolean", "string", "let", "const", "double", "array"];
var functionlist = ["range", "print", "puts", "log", "printf", "print", "println", "echo"];
var splitList = syntax.concat(operator, [`"`]);
list = syntax.concat(operator, [`"`]);
var string = false;

function colorize(code){
    for(var x = 0; x < list.length; x++){
        var re = RegExp("\\" + splitList[x], 'g');
        code = code.replace(re, `~${splitList[x]}~`);
    }
    code = code.split("~");
    return `<p>${code.map(colorAssign).join("")}</p>`;
}

function colorAssign(phrase){
    if(phrase == `"`){
        string = !string;
    }

    var category = "";

    if(string){
        category = "string";
    }
    else if(phrase == `"`){
        category = "string";
    }
    else if(keyword.includes(phrase.toLowerCase())){
        category = "keyword";
    }
    else if(syntax.includes(phrase.toLowerCase())){
        category = "syntax";
    }
    else if(operator.includes(phrase.toLowerCase())){
        category = "operator";
    }
    else if(boolean.includes(phrase.toLowerCase())){
        category = "boolean";
    }
    else if(vartype.includes(phrase.toLowerCase())){
        category = "vartype";
    }
    else if(functionlist.includes(phrase.toLowerCase())){
        category = "function";
    }
    else if(!isNaN(phrase)){
        category = "number";
    }
    else{
        category = "variable";
    }

    phrase = `<span class="${category}">${phrase}</span>`;
    return phrase;
}
