fetch("https://striveschool-api.herokuapp.com/api/product/", {
method: "GET",
headers: {
"Content-type": "application/json",

"Authorization":
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZmM0YjJkN2IxMTAwMTkwZTcyNTIiLCJpYXQiOjE3MDk4OTg4MjcsImV4cCI6MTcxMTEwODQyN30.QgeuVo1YY9X1lKtHjYsKPCbeXuSZoKMtvtZMkEvrHwo"
},
})
.then(res => res.json())
.then(cell => {
    console.log(cell)
    for(let phone of cell){
        let card = createClone()

        let name = card.querySelector('#name')
        let brand = card.querySelector('#brand')
        let description = card.querySelector('#description')
        let price = card.querySelector('#price')
        let img = card.querySelector('#imageUrl')
        let editBtn = card.querySelector('#edit-btn')
        let infoBtn = card.querySelector('#info-btn')

        name.innerText = phone.name
        brand.innerText = phone.brand
        description.innerText = phone.description
        price.innerText = phone.price
        img.src = phone.imageUrl
        infoBtn.href = `spec.html?id=${phone._id}`
        editBtn.href = `mod.html?id=${phone._id}`

        document.querySelector('.row').append(card)
    };
})

function createClone(){
    let template = document.querySelector('#card-template')
    let clone = template.content.cloneNode(true)
    return clone
}