/* <div class="card">
<img src="https://img.youm7.com/large/202112110136213621.jpg" alt="">
<div class="card-body">
    <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolorem accusamus
        doloremque consectetur impedit alias.</p>
</div>
<h3 class="title">Lorem ipsum dolor sit amet.</h3>
</div>
 */


const api = "https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=58e4d227704442b09374b6f78de780af";

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

    for(article in data.articles){
        let myCard = document.createElement("div");
        myCard.className = "card";
        myCard.innerHTML = `<img src="${data.articles[article].urlToImage == null ? "https://img.freepik.com/premium-vector/news-concept-illustration-flat-design_23-2148268772.jpg?w=2000" : data.articles[article].urlToImage }" alt="news picture">
        <div class="card-body">
            <p class="desc">${data.articles[article].description == null ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolorem accusamusdoloremque consectetur impedit alias." : data.articles[article].description}</p>
        </div>
        <h3 class="title">${data.articles[article].title == null ? "Lorem ipsum dolor sit, amet consectetur" : data.articles[article].title}</h3>`;
        container.append(myCard);
    }
}


