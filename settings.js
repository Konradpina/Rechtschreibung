
var settingbutton  =document.getElementById("settingbutton")
var settingsbar =document.getElementById("settingsbar")
var colorbar =document.getElementById("Colorbar")
var colorbarbutton = document.getElementById("colorbarbutton")
var voicebar =document.getElementById("voicebar")
var voicebarbutton = document.getElementById("voicebarbutton")
var hidebar =document.getElementById("hidebar")
var hidebarbutton = document.getElementById("hidebarbutton")
var creditsbar =document.getElementById("creditsbar")
var creditsbarbutton = document.getElementById("creditsbarbutton")
var bagroundcolorpick = document.getElementById("bagroundcolorpicker")
var fontcolorpick = document.getElementById("fontcolorpicker")
var languagebar = document.getElementById("languagebar")


settingbutton.addEventListener("mouseover", settingsapper)
settingbutton.addEventListener("mouseout",settingsdisapper)
settingsbar.addEventListener("mouseover", settingsapper)
settingsbar.addEventListener("mouseout",settingsdisapper)


colorbar.addEventListener("mouseover", colorbarapper)
colorbar.addEventListener("mouseout",colorbardisapper)
colorbarbutton.addEventListener("mouseover", delay(colorbarbutton, colorbarapper))
colorbarbutton.addEventListener("mouseout",colorbardisapper)
colorbar.addEventListener("mouseover", settingsapper)
colorbar.addEventListener("mouseout",settingsdisapper)


voicebar.addEventListener("mouseover", voicebarapper)
voicebar.addEventListener("mouseout",voicebardisapper)
languagebar.addEventListener("mousedown", voicebarapper)
languagebar.addEventListener("mouseout",voicebardisapper)
voicebar.addEventListener("mouseover", settingsapper)
voicebar.addEventListener("mouseout",settingsdisapper)
voicebar.addEventListener("mouseover", languagebarapper)
voicebar.addEventListener("mouseout",languagebardisapper)

hidebar.addEventListener("mouseover", hidebarapper)
hidebar.addEventListener("mouseout",hidebardisapper)
hidebarbutton.addEventListener("mouseover", delay(hidebarbutton,  hidebarapper))
hidebarbutton.addEventListener("mouseout",hidebardisapper)
hidebar.addEventListener("mouseover", settingsapper)
hidebar.addEventListener("mouseout",settingsdisapper)

creditsbar.addEventListener("mouseover", creditsbarapper)
creditsbar.addEventListener("mouseout",creditsbardisapper)
creditsbarbutton.addEventListener("mouseover", delay(creditsbarbutton,  creditsbarapper))
creditsbarbutton.addEventListener("mouseout",creditsbardisapper)
creditsbar.addEventListener("mouseover", settingsapper)
creditsbar.addEventListener("mouseout",settingsdisapper)

languagebar.addEventListener("mouseover", languagebarapper)
languagebar.addEventListener("mouseout",languagebardisapper)
voicebarbutton.addEventListener("mouseover", delay(voicebarbutton,  languagebarapper))
voicebarbutton.addEventListener("mouseout",languagebardisapper)
languagebar.addEventListener("mouseover", settingsapper)
languagebar.addEventListener("mouseout",settingsdisapper)




function settingsapper(){
    document.getElementById("settingsbar").classList.add("relativeschow")
}
function settingsdisapper(){
    document.getElementById("settingsbar").classList.remove("relativeschow")
}
function colorbarapper(){
    document.getElementById("Colorbar").classList.add("relativeschow")
}
function colorbardisapper(){
    document.getElementById("Colorbar").classList.remove("relativeschow")
}
function voicebarapper(){
    document.getElementById("voicebar").classList.add("relativeschow")
}
function voicebardisapper(){
    document.getElementById("voicebar").classList.remove("relativeschow")
}
function hidebarapper(){
    document.getElementById("hidebar").classList.add("relativeschow")
}
function hidebardisapper(){
    document.getElementById("hidebar").classList.remove("relativeschow")
}
function creditsbarapper(){
    document.getElementById("creditsbar").classList.add("relativeschow")
}
function creditsbardisapper(){
    document.getElementById("creditsbar").classList.remove("relativeschow")
}
function languagebarapper(){
    document.getElementById("languagebar").classList.add("relativeschow")
}
function languagebardisapper(){
    document.getElementById("languagebar").classList.remove("relativeschow")
}

function delay (elem, callback, layer) {
    var timeout = null;
    elem.onmouseover = function() {
        // checkdealy(layer)
        // Set timeout to be a timer which will invoke callback after 1s
        timeout = setTimeout(callback, 500);
    };

    elem.onmouseout = function() {
        // Clear any timers set to timeout
        clearTimeout(timeout);
    }
};
function checkdealy(layer){
    if(layer===1){
        var layer1=document.getElementsByClassName("layer1")
        var true1=0
        var false1=0
        for(i=0;i<layer1.length;i++){
            if(layer1[i].classList.contains("relativehidden")){
                true1++
            }else{
                false1++
            }
        }
        if(true1===layer1.length){
            console.log("it was free")
        }else{
            console.log("no")
        }
    }
}




bagroundcolorpick.addEventListener("change", changebackground);
fontcolorpick.addEventListener("change", changefontcolor);

function changebackground(){
    document.getElementById("backgroundbody").style.backgroundColor=document.getElementById("bagroundcolorpicker").value

}
function changefontcolor(){
    console.log("now")
    document.getElementById("backgroundbody").style.color=document.getElementById("fontcolorpicker").value
}
document.getElementById("bagroundcolorpicker").value="#74661a"


