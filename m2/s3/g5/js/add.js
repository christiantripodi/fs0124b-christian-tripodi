
const salva =  document.querySelector('#crea')

salva.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("prova aggiunta");





    let name = document.querySelector('#nome').value
    let brand = document.querySelector('#brand').value
    let imageUrl = document.querySelector('#imageUrl').value
    let description = document.querySelector('#description').value
    let price = document.querySelector('#prezzo').value







    let cell = {
        name,
        brand,
        imageUrl,
        description,
        price

       
    }




fetch("https://striveschool-api.herokuapp.com/api/product/", {
method: "POST",
headers: {
"Content-type": "application/json",

"Authorization":
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZmM0YjJkN2IxMTAwMTkwZTcyNTIiLCJpYXQiOjE3MDk4OTg4MjcsImV4cCI6MTcxMTEwODQyN30.QgeuVo1YY9X1lKtHjYsKPCbeXuSZoKMtvtZMkEvrHwo"
},





body: JSON.stringify(cell),
})



.then((res) => res.json())
.then((res) => {
    location.href = '../add.html'



});
});