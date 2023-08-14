const search = ()=>{
    const searchBox = document.getElementById("search-item").ariaValueMax.toLocaleUpperCase();
    const storeItems = document.getElementById("menu");
    const food = document.querySelectorAll("foods");
    const pname = foodmenu.getElementsByTagName("h2");

    for(var i=0; i < pname.length; i++){
        let match = foods[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue =  match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                foods[i].style.display = "";
            }else{
                foods[i].style.display = "none";
            }
        }
    }
}