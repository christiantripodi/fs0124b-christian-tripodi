
const salva =  document.querySelector('#crea')

salva.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("invio prodotoo");

    let nome = document.querySelector('#nome').value
    let brand = document.querySelector('#brand').value
    let urlImmagine = document.querySelector('#urlImmagine').value
    let descrizione = document.querySelector('#descrizione').value
    let prezzo = document.querySelector('#prezzo').value

    let cell = {
        nome,
        brand,
        prezzo,
        urlImmagine,
        descrizione

       
    }


fetch("https://striveschool-api.herokuapp.com/api/product/", {
method: "POST",
headers: {
"Content-type": "application/json",

Authorization:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZmM0YjJkN2IxMTAwMTkwZTcyNTIiLCJpYXQiOjE3MDk4OTg4MjcsImV4cCI6MTcxMTEwODQyN30.QgeuVo1YY9X1lKtHjYsKPCbeXuSZoKMtvtZMkEvrHwo",
},
body: JSON.stringify(cell),
})
.then((res) => res.json())
.then((res) => {


});
});