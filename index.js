let elForm = document.querySelector("#form")
let elInput = document.querySelector("#input-search")
let list = document.querySelector(".list")
let template = document.querySelector("#template").content;

elForm.addEventListener('submit', e =>{
     e.preventDefault()
     list.innerHTML = null;
    let KEY = "23037258-af0f917717571caabf69b3a7f"


async function fetchdata(){
    const response = await fetch(`https://pixabay.com/api/videos/?key=${KEY}&lang=ru&q=${elInput.value}&category=${select.value}&page=1`); //<--- end point
    const data = await response.json();


    console.log(data); 
    renderVideos = (dataApi)=>{
        dataApi.forEach(elem => {
            let {tags, videos:{tiny:{url}}} = elem
            
            let cloneTemplate = template.cloneNode(true)
            cloneTemplate.querySelector("#add-data").setAttribute("src", url)
            cloneTemplate.querySelector(".video-tag").textContent = tags
        
            list.appendChild(cloneTemplate)
        });
    }
    renderVideos(data.hits)
}
fetchdata()

})