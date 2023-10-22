



function language(){
    // alang();
    document.getElementById("languagebox").hidden=false;
    changeh()
}

// alle vorhanden sprachen finden
function alang(){
    var voices =window.speechSynthesis.getVoices()
    
}



function voicelist(Language){
    var activlist=document.getElementsByClassName("lbtn")
    for(i=0;i<activlist.length;i++){
        activlist[i].classList.remove("active")
    }
    voicelisting=[];
    var voices =window.speechSynthesis.getVoices()
    var languagedisplays =document.getElementsByClassName("lbtn")
    var voicecount =document.getElementsByClassName("lbtn")
    if(Language===1){
        Language="de-DE"
        exampel="Beispiel"
        voicelisting=[];
    }else if(Language===2){
        Language="en-US"
        exampel="Exampel"
        voicelisting=[];
    }else if(Language===3){
        exampel="ejemplo"
        Language="es-ES"
        voicelisting=[];
    }else if(Language===4){
        exampel="exampel"
        Language="en-GB"
        voicelisting=[];
    }else if(Language===5){
        exampel="exemple"
        Language="fr-FR"
        voicelisting=[];
    }
    var countvoices =0
    var x =0
    for(i=0; i<11;i++){
        voicelisting.shift()
    }
    changelang()
    function changelang(){
        for(i=0;i<voicecount.length;i++){
            voicecount[i].hidden=true
        }
        for(i=0;i< voices.length;i++){
            if(voices[i].lang==Language){
                voicelisting.push(i)
                languagedisplays[x].innerText=voices[i].name
                languagedisplays[x].hidden=false
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
    document.getElementById("lmenu").hidden=true;
    document.getElementById("pmenu").hidden=false;

}


function voicechange(option){
    var activlist=document.getElementsByClassName("lbtn")
    for(i=0;i<activlist.length;i++){
        activlist[i].classList.remove("active")
    }
    activlist[option-1].classList.add("active")
    thevoice= voicelisting[option-1]
    readexampel(exampel)

}
function closelanguage(){
    document.getElementById("languagebox").hidden=true;
    back();
    return
}
function back(){
    
    document.getElementById("lmenu").hidden=false;
    document.getElementById("pmenu").hidden=true;
   
    
}

voicelist(1)
back()