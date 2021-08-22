let elForm = document.querySelector("#form")
let elInput = document.querySelector("#input-search")
let list = document.querySelector(".list")
let template = document.querySelector("#template").content;

async function fetchdata(){

    const response = await fetch(`https://pixabay.com/api/videos/?key=23037258-af0f917717571caabf69b3a7f`);
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

// renderTag = (dataTag, element)=>{
//     elForm.addEventListener('submit', e =>{
//         e.preventDefault()
//         let regex =new RegExp(elInput.value.trim(), 'gi')
//         let videoList = []
//         dataTag.forEach(elem =>{
//             elem.forEach( elem =>{
//                 if(elem.tags.match(regex)){
//                     videoList.push(elem.tags)
//                 }
//                 else{
//                     elem
//                 }
//             })
//         }) 
//     })
// }
// renderTag(data, list)

}
fetchdata()