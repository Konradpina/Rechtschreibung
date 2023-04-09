var inputtext=[]
var thevoice=0
var Version
var diktatinput = document.getElementById("diktatinput")
var part=0
var wrongpoints=0
var solution=""

function start(option){
    nothing= testfornothing()
    if(nothing===true){
        return
    }
    var textin =document.getElementById("textarea").value.replace(/(\r\n|\n|\r)/gm, " ").replace("  "," ").replace("   "," ").replace("    "," ").split(" ")
    inputtext =removespace(textin);
    // splittext = split(option)

    document.getElementById("inputbox").hidden=true
    document.getElementById("diktatbox").hidden=false
    Version = option
    readoutlout()
}

// function split(option){
//     if (option===1){
//         for(i=0; i<inputtext.length;i++){
            
//         }
//     }
// }

function testfornothing(){
    var inp =document.getElementById("textarea").value.split("")
    for(i=0; i<inp.length; i++){
        if(inp[i]!=" "){
            return false
        }
    }
    alert("there is no Input")
    return true
}
function removespace(textin){
    for(i=0; i<textin.length;i++){
        if(textin[i]===""){
            textin.splice(i, 1);
            i--
        }
    }
    return textin
}

function checkword(){
    var textdisplay =document.getElementById("textdisplay").innerText
    var input =document.getElementById("diktatinput").value;

    document.getElementById("solution").innerText=""
    if(Version ===1){
        solution= inputtext[part]+" "
        if(input === solution){
            textdisplay= textdisplay+" "+inputtext[part]
            document.getElementById("textdisplay").innerText = textdisplay
            if(part+1=== inputtext.length){
                document.getElementById("diktatinput").value="";
                alert("the ende")
                return
            }
            part++
            document.getElementById("diktatinput").value="";
            readoutlout()
            return
        }else if(input.search(" ")!= -1){
            for(i=0;i<document.getElementById("diktatinput").value.split("").length;i++){
                document.getElementById("diktatinput").value =document.getElementById("diktatinput").value.replace(" ","");
            }
            wrongpoints++
        }
       
    }else if(Version ===2){
        
    }
}


function readoutlout(){
    var textwirdgelesen = inputtext[part];
    textwirdgelesen = textwirdgelesen.replace(".","punkt")
    textwirdgelesen = textwirdgelesen.replace(",","kommar")
    textwirdgelesen = textwirdgelesen.replace("?","fragezeichen")
    textwirdgelesen = textwirdgelesen.replace("!","ausrufezeichen")
    textwirdgelesen = textwirdgelesen.replace("(","klammer auf")
    textwirdgelesen = textwirdgelesen.replace(")","klammer zu")
    textwirdgelesen = textwirdgelesen.replace(":"," doppel punkt")

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[thevoice];
    msg.text = `${textwirdgelesen}`
    speechSynthesis.speak(msg);
}

function displaysolution(){
    document.getElementById("solution").innerText=solution
}

function wrongletters(){
    var diktatbox = document.getElementById("diktatbox")
    var input = diktatinput.value
    var rightword = inputtext[part]
    var sinput =input.split("") 
    var sword= rightword.split("")
    if (sinput.length!=sword.length){
        if(sword.length>sinput.length){
            return "there are letters missing"
        }else if(sword.length<sinput.length){
            return "there are to many letters"
        }
    }
    for (i=0;i<sword.length; i++){
        if(sword[i]!=sinput[i]){
            return `there is a Mistake at the ${i+1} letter`
        }
    }
    return "there might be somthing wrong with the Spaces"
}
function hint(){
    var diktatbox = document.getElementById("diktatbox")
    document.getElementById("solution").innerText= wrongletters()
}

