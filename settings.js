
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
voicebarbutton.addEventListener("mouseover", voicebarapper)
voicebarbutton.addEventListener("mouseout",voicebardisapper)
voicebar.addEventListener("mouseover", settingsapper)
voicebar.addEventListener("mouseout",settingsdisapper)

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
    document.getElementById("voicebar").classList.add("top10")
}
function voicebardisapper(){
    document.getElementById("voicebar").classList.remove("top10")
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


