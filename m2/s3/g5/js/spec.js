let url = new URLSearchParams(location.search)
let id = url.get('id')

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
method: "GET",
headers: {
"Content-type": "application/json",

"Authorization":
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZmM0YjJkN2IxMTAwMTkwZTcyNTIiLCJpYXQiOjE3MDk4OTg4MjcsImV4cCI6MTcxMTEwODQyN30.QgeuVo1YY9X1lKtHjYsKPCbeXuSZoKMtvtZMkEvrHwo"
}
})
.then(res => res.json())
.then(phone => {
    let name = document.querySelector('#name')
    let brand = document.querySelector('#brand')
    let price = document.querySelector('#price')
    let imageUrl = document.querySelector('#imageUrl')
    let description = document.querySelector('#description')

    name.value = phone.name
    brand.value = phone.brand
    price.value = phone.price
    imageUrl = phone.imageUrl
    description.value = phone.description

})






