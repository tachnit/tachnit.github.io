$(document).ready(function(){
    var hebrew = {
        "python": "פייתון",
        "java": "ג'אווה",
        "javascript": "ג'אווה סקריפט",
        "ruby": "רובי",
        "perl": "פרל",
        "if statement": "פקודת תנאי",
        "set": "קבוצה",
        "switch statement": "טענת החלפה",
        "array": "מערך",
        "function": "פונקציה",
        "dictionary": "מילון",
        "boolean logic": "בוליאנית",
        "tuple": "רשומה",
        "while loop": "לולאה שנבדקת בראשה",
        "for each loop": "לולאת אוסף",
        "brightscript": "בריית סקריפט",
    }
    function render(lang){
        $("#languages").append(
            `<div id="${lang}" class="language">
                <h1 id="langheader">${lang}${hebrew[lang] ? ` ${hebrew[lang]}` : ``}</h1>
                <div id="section_0" class="column"></div>
                <div id="section_1" class="column"></div>
                <div id="section_2" class="column"></div>
            </div>`
        );
        var lesson = code[lang];
        for(var x = 0; x < lesson.length; x += 3){
            var columns = [lesson[x], lesson[x+1], lesson[x+2]];
            for(var y = 0; y < 3; y++){
                var section = columns[y];
                if(section != undefined){
                    $("#" + lang + " #section_" + y).append(`
                        <div class="section">
                            <h3>${section.name}</h3>
                            <h3>${hebrew[section.name.toLowerCase()] ? `${hebrew[section.name.toLowerCase()]}` : ``}</h3>
                            <div class="codediv">
                                ${section.content.map((c)=>
                                    `<pre>${colorize(c)}</pre>`
                                ).join('')}
                                ${section.console ? 
                                    `<hr />
                                    ${section.console.map((c)=>
                                        `<p class="console">${c}</p>`
                                    ).join('')}` 
                                : ``}
                            </div>
                        </div>
                    `);
                }
            }
        }
    }
    render("python");
    render("java");
    render("ruby");
    render("c");
    render("javascript");
    render("php");
    render("perl");
    render("brightscript");
});
