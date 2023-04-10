
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
colorbarbutton.addEventListener("mouseover", colorbarapper)
colorbarbutton.addEventListener("mouseout",colorbardisapper)
colorbar.addEventListener("mouseover", settingsapper)
colorbar.addEventListener("mouseout",settingsdisapper)


voicebar.addEventListener("mouseover", voicebarapper)
voicebar.addEventListener("mouseout",voicebardisapper)
languagebar.addEventListener("mouseover", voicebarapper)
languagebar.addEventListener("mouseout",voicebardisapper)
voicebar.addEventListener("mouseover", settingsapper)
voicebar.addEventListener("mouseout",settingsdisapper)
voicebar.addEventListener("mouseover", languagebarapper)
voicebar.addEventListener("mouseout",languagebardisapper)

hidebar.addEventListener("mouseover", hidebarapper)
hidebar.addEventListener("mouseout",hidebardisapper)
hidebarbutton.addEventListener("mouseover", hidebarapper)
hidebarbutton.addEventListener("mouseout",hidebardisapper)
hidebar.addEventListener("mouseover", settingsapper)
hidebar.addEventListener("mouseout",settingsdisapper)

creditsbar.addEventListener("mouseover", creditsbarapper)
creditsbar.addEventListener("mouseout",creditsbardisapper)
creditsbarbutton.addEventListener("mouseover", creditsbarapper)
creditsbarbutton.addEventListener("mouseout",creditsbardisapper)
creditsbar.addEventListener("mouseover", settingsapper)
creditsbar.addEventListener("mouseout",settingsdisapper)

languagebar.addEventListener("mouseover", languagebarapper)
languagebar.addEventListener("mouseout",languagebardisapper)
voicebarbutton.addEventListener("mouseover", languagebarapper)
voicebarbutton.addEventListener("mouseout",languagebardisapper)
languagebar.addEventListener("mouseover", settingsapper)
languagebar.addEventListener("mouseout",settingsdisapper)




function settingsapper(){
    document.getElementById("settingsbar").classList.add("top5")
}
function settingsdisapper(){
    document.getElementById("settingsbar").classList.remove("top5")
}
function colorbarapper(){
    document.getElementById("Colorbar").classList.add("top10")
}
function colorbardisapper(){
    document.getElementById("Colorbar").classList.remove("top10")
}
function voicebarapper(){
    document.getElementById("voicebar").classList.add("top15")
}
function voicebardisapper(){
    document.getElementById("voicebar").classList.remove("top15")
}
function hidebarapper(){
    document.getElementById("hidebar").classList.add("top10")
}
function hidebardisapper(){
    document.getElementById("hidebar").classList.remove("top10")
}
function creditsbarapper(){
    document.getElementById("creditsbar").classList.add("top10")
}
function creditsbardisapper(){
    document.getElementById("creditsbar").classList.remove("top10")
}
function languagebarapper(){
    document.getElementById("languagebar").classList.add("top10")
}
function languagebardisapper(){
    document.getElementById("languagebar").classList.remove("top10")
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


