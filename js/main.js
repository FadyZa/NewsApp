/* <div class="card">
<img src="https://img.youm7.com/large/202112110136213621.jpg" alt="">
<div class="card-body">
    <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolorem accusamus
        doloremque consectetur impedit alias.</p>
</div>
<h3 class="title">Lorem ipsum dolor sit amet.</h3>
</div>
 */


const api = "https://newsdata.io/api/1/news?apikey=pub_13498c5eafee9357f3a1a2169b8b4be00892b&country=eg&language=ar&category=sports";

async function getData(callB){
    let data = await fetch(api)
    let JsonData = await data.json();
    callB(JsonData)
}
getData(handleData);

let container = document.querySelector(".container");
console.log(container);

function handleData(data){
    // console.log(data.articles)

    for(result in data.results){
        console.log(data.results[result].title)
        let myCard = document.createElement("div");
        myCard.className = "card";
        myCard.innerHTML = `<img src="${data.results[result].image_url == null ? "https://img.freepik.com/premium-vector/news-concept-illustration-flat-design_23-2148268772.jpg?w=2000" : data.results[result].image_url }" alt="news picture">
        <div class="card-body">
            <p class="desc">${data.results[result].description == null ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolorem accusamusdoloremque consectetur impedit alias." : data.results[result].description }</p>
        </div>
        <h3 class="title">${data.results[result].title == null ? "Lorem ipsum dolor sit, amet consectetur" : data.results[result].title}</h3>`;
        container.append(myCard);
    }
}
