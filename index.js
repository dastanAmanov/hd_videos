let elForm = document.querySelector("#form")
let elInput = document.querySelector("#input-search")
let list = document.querySelector(".list")
let template = document.querySelector("#template").content;
let btnPrev = document.querySelector('#btn-prev');
let btnNext = document.querySelector('#btn-next');

let KEY = "23037258-af0f917717571caabf69b3a7f"
let pageCount = 1

renderVideos = (dataApi)=>{
    dataApi.forEach(elem => {
        let {tags, videos:{tiny:{url}}} = elem

        let cloneTemplate = template.cloneNode(true)
        cloneTemplate.querySelector("#add-data").setAttribute("src", url)
        cloneTemplate.querySelector(".video-tag").textContent = tags

        list.appendChild(cloneTemplate)

        if(pageCount <= 1){
            btnPrev.disabled = true;
        }else{
            btnPrev.disabled = false;
        }
    })
}

async function fetchdata(){
    list.innerHTML = null;
    const response = await fetch(`https://pixabay.com/api/videos/?key=${KEY}&lang=ru&q=${elInput.value}&category=${select.value}&page=${pageCount}`); //<--- endpoint
    const data = await response.json();
    let total = Math.ceil(data.totalHits / 50)
    
    if(pageCount == total){
        btnNext.disabled = true
    }else{
        btnNext.disabled = false
    }
 
    renderVideos(data.hits)
    
}
fetchdata()


btnPrev.addEventListener('click', ()=>{
    pageCount--
    console.log(pageCount);
    fetchdata()
})
btnNext.addEventListener('click', ()=>{
    pageCount++
    console.log(pageCount);
    fetchdata()
})

elForm.addEventListener('submit', e =>{
    e.preventDefault()
    
    fetchdata()
    
})