function yearList() {
    let year = document.getElementById('ano') 
    for(let i = 1922; i<2022; i++){ 
        let option = document.createElement("option") 
        option.value = i 
        option.text = i 
        year.appendChild(option) 
    }
}
yearList()