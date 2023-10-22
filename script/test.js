var spacecount=0
var mistakes=[]
var mistakec=0
function starttest(){
    console.log("yes")
    readoutlout(0)
}
function checktest(){
    var input = document.getElementById("testinput").value
    var Spaces= (input.split(" ").length-1)
    
    if(Spaces!=spacecount){
        console.log(Spaces)
        spacecount=Spaces
        part=spacecount
        if(Spaces==inputtext.length){
            document.getElementById("corectbtn").hidden=false
            return
        }
        readoutlout()
    }
    
}

function startcorrection(){
    var crinput = removespace(document.getElementById("testinput").value.split(" "))
    mistakes=[]
    for(i=0;i<inputtext.length;i++){
        if(crinput[i]!=inputtext[i]){
            mistakes.push(i)
        }
    }
    alert(`you made ${mistakes.length} Mistakes`)
    if(mistakes.length===0){
        alert("Congratiulations")
        return
    }
    loadmistake()
    document.getElementById("Correctionbox").hidden=false
}

function loadmistake(){
    var crinput = removespace(document.getElementById("testinput").value.split(" "))
    

    document.getElementById("cw").innerHTML=`${crinput[mistakes[mistakec]]}&nbsp`
    if(mistakes[mistakec]!=0){
        document.getElementById("cr").innerHTML=`${inputtext[mistakes[mistakec]-1]}&nbsp`
    }
    if(mistakes[mistakec]!=inputtext.length){
        document.getElementById("cn").innerHTML=`${inputtext[mistakes[mistakec]+1]}&nbsp`
    }
    part=mistakes[mistakec]
    readoutlout()
}

function crcheck(){
    var crinput=document.getElementById("crinput").value
    if(crinput==inputtext[mistakes[mistakec]]+" "){
        if(mistakec+1==mistakes.length){
            document.getElementById("crinput").value=""
            alert("your done")
            
            return
        }
        document.getElementById("crinput").value=""
        mistakec++
        loadmistake()

    }
}