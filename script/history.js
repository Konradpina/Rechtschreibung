

function historyoff(){
    document.getElementById("historybox").hidden=true
}

function textt(){
    var text=""
    
    for(i=0;i<prozenthist.length;i++){
        // var num =Math.floor(Math.random()*255)
        text=`${text} <div style="background-color: rgb(${255*prozenthist[i].Pro*1/100},${(255-255*Number(prozenthist[i].Pro)*1/100)}, 0);width: ${100-Number(prozenthist[i].Pro)}vw;">
        Day ${prozenthist[i].Date}, Words ${prozenthist[i].hislength}, Time ${prozenthist[i].histtime} Prozent ${prozenthist[i].Pro}%
        </div>`
    }
    text= text +`<button onclick="historyoff()">Diktat</button>`
    document.getElementById("historybox").innerHTML= text
}
textt()