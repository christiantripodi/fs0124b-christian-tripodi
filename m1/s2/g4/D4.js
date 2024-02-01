/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/



function area (a,b){
    return a * b
}

console.log(area(4,2))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/




function crazySum (x,y) {
    let result;
    if ((x + y != x || x + y != y)) {
      result = x + y * 3;
    } else {
      result = x + y ;
    }
    return result;
  }
  
  console.log(crazySum(0,3));



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


function crazyDiff (n){
if(n > 19){
 return Math.abs(n - 19)
}else{
  return (n-19)
}



}





/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


function boundary(n){

  if((n > 20 && n <=100) || n == 400){
    return true 

  }else{
    return false
  }
}

// 

function boundary(n){

  return ((n > 20 && n <=100) || n == 400)
}



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/



function epify (string){

  if(!string.startsWith('EPICODE')){
    
 return 'EPICODE' + string

  }
  return string;





}




/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/












/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/



function upperFirst (stringa){

  let parole = stringa.split(' ')
  let risultato =[];
  for(let i = 0; i < parole.length; i++){

      let primaLettera = parole[i][0].toUpperCase();
      let restoParola = parole[i].slice(1)
      let parolaComp = primaLettera + restoParola;


    risultato.push(parolaComp)

    }
 
    return risultato.join(' ')
}

console.log(upperFirst('Che bella la correzione'))




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 






