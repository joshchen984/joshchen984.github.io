function togglePopup(id, show){
    let popup = document.getElementById(id);
    if(show) {
        popup.style.visibility = "visible";
    }else{
        popup.style.visibility = "hidden";
    }
}