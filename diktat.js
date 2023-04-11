var inputtext=[]
var thevoice=0
var Version
var diktatinput = document.getElementById("diktatinput")
var part=0
var wrongpoints=0
var solution=""
var voicelisting=[]
var exampel="Exampel"

function start(option){
    nothing= testfornothing()
    if(nothing===true){
        return
    }
    var textin =document.getElementById("textarea").value.replace(/(\r\n|\n|\r)/gm, " ").split(" ")
    inputtext =removespace(textin);
    // splittext = split(option)

    document.getElementById("inputbox").hidden=true
    document.getElementById("diktatbox").hidden=false
    Version = option
    readoutlout()
    time("start")
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
                time(stop)
                document.getElementById("diktatinput").value="";
                alert("the ende "+wrongpoints+" Mistakes. there were "+inputtext.length+" Words")
                schowprozent(inputtext.length,inputtext.length)
                return
            }
            part++
            document.getElementById("diktatinput").value="";
            readoutlout()
            schowprozent(part,inputtext.length)
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

function schowprozent(atword, allword){
    var prozent = Math.round(atword*100/(allword))
    document.getElementById("prozentdisplay").innerText=prozent+"%"
}


function time(option){
    if(option==="start"){
         timedtime =setInterval(timer, 1000)    
    }else if(option="stop"){
        window.clearInterval(timedtime)
    }
}
var seconds=0
var minutes=0
var houers=0
function timer(){
    seconds++
    if(seconds===60){
        seconds=0
        minutes++
    }
    if(minutes===60){
        minutes=0
        houers++
    }
    
    
    document.getElementById("timedisplay").innerText=`${houers}:${minutes}:${seconds}`
}



function voicelist(Language){
    voicelisting=[];
    var voices =window.speechSynthesis.getVoices()
    var languagedisplays =document.getElementsByClassName("voicelanguage")
    var voicecount =document.getElementsByClassName("voicecount")
    if(Language===1){
        Language="de-DE"
        document.getElementById("voicebar").classList.add("animationvoice")
        exampel="Beispiel"
        voicelisting=[];
    }else if(Language===2){
        Language="en-US"
        document.getElementById("voicebar").classList.add("animationvoice")
        exampel="Exampel"
        voicelisting=[];
    }else if(Language===3){
        exampel="ejemplo"
        Language="es-ES"
        document.getElementById("voicebar").classList.add("animationvoice")
        voicelisting=[];
    }else if(Language===4){
        exampel="exampel"
        Language="en-GB"
        document.getElementById("voicebar").classList.add("animationvoice")
        voicelisting=[];
    }else if(Language===5){
        exampel="exemple"
        Language="fr-FR"
        document.getElementById("voicebar").classList.add("animationvoice")
        voicelisting=[];
    }
    var countvoices =0
    var x =0
    for(i=0; i<11;i++){
        voicelisting.shift()
    }
    setTimeout(changelang, 500)
    function changelang(){
        for(i=0;i<voicecount.length;i++){
            voicecount[i].hidden=true
        }
        for(i=0;i< voices.length;i++){
            if(voices[i].lang==Language){
                voicelisting.push(i)
                languagedisplays[x].innerText=voices[i].name
                voicecount[x].hidden=false
                x++
                countvoices++
                if(x===10){
                    return
                }
            }
        }
        if(countvoices===0){
            document.getElementById("errorlanguage").hidden=false
        }else{
            document.getElementById("errorlanguage").hidden=true
        }
    }
    setTimeout(removeanimaton, 1000)
    function removeanimaton(){
        document.getElementById("voicebar").classList.remove("animationvoice")
    }

}

function voicechange(option){
    thevoice= voicelisting[option]
    readexampel(exampel)

}

function readexampel(){

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[thevoice];
    msg.text = exampel
    speechSynthesis.speak(msg);
}