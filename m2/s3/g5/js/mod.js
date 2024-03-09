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
    let description = document.querySelector('#description')
    let price = document.querySelector('#price')
    let imageUrl = document.querySelector('#imageUrl')

    name.value = phone.name
    brand.value = phone.brand
    description.value = phone.description
    price.value = phone.price
    imageUrl = phone.imageUrl
})






let saveBtn = document.querySelector('#save-btn')
saveBtn.addEventListener('click', () => {


    let name = document.querySelector('#name').value
    let brand = document.querySelector('#brand').value
    let imageUrl = document.querySelector('#imageUrl').value
    let description = document.querySelector('#description').value
    let price = document.querySelector('#price').value



    let phone = {
        name,
        brand,
        imageUrl,
        description,
        price

       
    }





    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
        method: "PUT",
        headers: {
        "Content-type": "application/json",
        
        "Authorization":
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZmM0YjJkN2IxMTAwMTkwZTcyNTIiLCJpYXQiOjE3MDk4OTg4MjcsImV4cCI6MTcxMTEwODQyN30.QgeuVo1YY9X1lKtHjYsKPCbeXuSZoKMtvtZMkEvrHwo"
        },
    
             body:JSON.stringify(phone)
            })
            .then(res => res.json())
            .then(modifica => {
                location.href = '../index.html'
            })


        })







        let deleteBtn = document.querySelector('#delete-btn')
deleteBtn.addEventListener('click', () => {
    
    
    
    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
method: "DELETE",
headers: {
"Content-type": "application/json",

"Authorization":
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZmM0YjJkN2IxMTAwMTkwZTcyNTIiLCJpYXQiOjE3MDk4OTg4MjcsImV4cCI6MTcxMTEwODQyN30.QgeuVo1YY9X1lKtHjYsKPCbeXuSZoKMtvtZMkEvrHwo"
},
            })
            .then(res => res.json())
            .then(phoneDeleted => {
                location.href = '../index.html'
            })
})