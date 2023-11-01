var inputtext=[]
var thevoice=0
var Version
var diktatinput = document.getElementById("diktatinput")
var part=0
var wrongpoints=0
var solution=""
var voicelisting=[]
var exampel="Exampel"

var prozenthist=JSON.parse(localStorage.getItem("ProHist"))||[]

document.onkeydown= function(){
    document.getElementById("diktatinput").focus()
}


function focust(){
    document.getElementById("diktatinput").focus()
}

function start(option){
    nothing= testfornothing()
    if(nothing===true){
        return
    }
   
    var textin =document.getElementById("textarea").value.replace(/(\r\n|\n|\r)/gm, " ").split(" ")
    inputtext =removespace(textin);
    // splittext = split(option)
    if (document.getElementById("vtest").checked){
        document.getElementById("inputbox").hidden=true
        document.getElementById("testbox").hidden=false
        starttest()
        return
    }
    
    document.getElementById("inputbox").hidden=true
    document.getElementById("diktatbox").hidden=false


    Version = option
    readoutlout()
    time("start")
    // focust()
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

function checkword(event){
    
    if(event.key==="F2"){
        hint()
        return
    }else if(event.key==="F1"){
        displaysolution()
        return
    }

    var textdisplay =document.getElementById("textdisplay").innerText
    var input =document.getElementById("diktatinput").value;

    document.getElementById("solution").hidden=true
    if(Version ===1){
        solution= inputtext[part]+" "
        if(input === solution){
            textdisplay= textdisplay+inputtext[part]+" "
            document.getElementById("textdisplay").innerText = textdisplay
            if(part+1=== inputtext.length){
                time(stop)
                document.getElementById("diktatinput").value="";
                alert("the end. You had "+wrongpoints+" Mistakes in "+inputtext.length+" Words. It took you "+houers+" houers "+minutes+" minutes and "+seconds+"seconds"+"your failure rate is "+Math.round(wrongpoints/inputtext.length*100)+"%")
                schowprozent(inputtext.length,inputtext.length)
                const d=new Date();
                prozenthist=[...prozenthist,{Date:`${d.getDate()}.${d.getMonth() +1 }.${d.getFullYear()}`,Pro:`${Math.round(wrongpoints/inputtext.length*100)}`,histtime:`${houers}h ${minutes}m ${seconds}s`,hislength:`${inputtext.length}`}]
                localStorage.setItem("ProHist",JSON.stringify(prozenthist))
                console.log(prozenthist)
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
        solution= inputtext[part]+" "+inputtext[part+1]+" "+inputtext[part+2]+" "
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
        }else if(input.match(" ")===1){
            for(i=0;i<document.getElementById("diktatinput").value.split("").length;i++){
                document.getElementById("diktatinput").value =document.getElementById("diktatinput").value.replace(" ","");
            }
            wrongpoints++
        }
       
    }else if(Version ===3){

    }
}


function readoutlout(){
    var textwirdgelesen = inputtext[part];
    textwirdgelesen = textwirdgelesen.replace(".","punkt")
    textwirdgelesen = textwirdgelesen.replace(",","komma")
    textwirdgelesen = textwirdgelesen.replace("?","fragezeichen")
    textwirdgelesen = textwirdgelesen.replace("!","ausrufezeichen")
    textwirdgelesen = textwirdgelesen.replace("(","klammer auf")
    textwirdgelesen = textwirdgelesen.replace(")","klammer zu")
    textwirdgelesen = textwirdgelesen.replace(":"," doppel punkt")
    textwirdgelesen = textwirdgelesen.replace("-"," Bindestrich")
    textwirdgelesen = textwirdgelesen.replace(".","punkt")
    textwirdgelesen = textwirdgelesen.replace(",","komma")
    textwirdgelesen = textwirdgelesen.replace("?","fragezeichen")
    textwirdgelesen = textwirdgelesen.replace("!","ausrufezeichen")
    textwirdgelesen = textwirdgelesen.replace("(","klammer auf")
    textwirdgelesen = textwirdgelesen.replace(")","klammer zu")
    textwirdgelesen = textwirdgelesen.replace(":"," doppel punkt")
    textwirdgelesen = textwirdgelesen.replace("-"," Bindestrich")

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[thevoice];
    msg.text = `${textwirdgelesen}`
    speechSynthesis.speak(msg);
}

function displaysolution(){
    document.getElementById("solution").innerText=solution
    document.getElementById("solution").hidden=false
    closeh();
    document.getElementById("diktatinput").focus()
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
    document.getElementById("solution").hidden=false
    closeh()
    document.getElementById("diktatinput").focus()
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






function readexampel(){

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[thevoice];
    msg.text = exampel
    speechSynthesis.speak(msg);
}

document.getElementById("audio").volume=0.001/100