const getData = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const fetchedData = await response.json()
    return fetchedData
}
const init = async() =>{
    const data = await getData()
console.log(data);
const wraper = document.getElementById("Wraper");

data?.forEach(element => {
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    card.className = "card";
    card.style.width = "20rem"
    card.style.padding = "10px"
    card.style.margin = "10px"
    cardBody.className = "card-body"
    cardTitle.textContent = element.name
    cardText.textContent= element.email
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    card.appendChild(cardBody)
    wraper.appendChild(card);
});
}
init()