function yearList() {
    let year = document.getElementById('ano') //busca o elemento HTML com o id "ano"
    for(let i = 1922; i<2022; i++){ //loop contendo o ano inicial e final que deverão constar no input select
        let option = document.createElement("option") //cria um elemento "option" na variável option
        option.value = i //atribui o valor do índice ao value do option
        option.text = i //atribui o valor do índice ao text do option
        year.appendChild(option) //cria um option como "filho" para o select, contendo o value e o text equivalentesao index atual
    }
}
yearList()