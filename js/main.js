alert("Seja bem-vindo!")
function search(){
fetch("https://api.thecatapi.com/v1/images/search")
    .then(data=>data.json())
    .then(json=>{
        console.log(json)
        document.getElementById("content").src=json[0].url
    })
}



window.onload = () => {
    search()
}
    

    busca.addEventListener("click", () => search());