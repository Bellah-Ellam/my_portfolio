var tablink = document.getElementsByClassName("tab-link")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for (tabl of tablink){
        tabl.classList.remove("active-link")
    }
    for (tablco of tabcontents){
        tablco.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}