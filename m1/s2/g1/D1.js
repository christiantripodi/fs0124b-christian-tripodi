/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
in javascript i dati inseriti devono essere divisi per tipologia.

- I dati relativo al testo 
  si chiamano stringhe. per inserire il testo è sufficiente racchiuderlo tra gli apici

- I dati relativi ai numeri vanno inseriti senza nessuna punteggiatura ne parentesi, servono
 per indicare i numeri matematici

- i dati booleani si esprimono con due valori True o False (servono per creare meccanismi on/off)

- Array è una lista di elementi che contiene una quantià di dati e si inseriscono tra le 
 parentesi quadre [ ] 

- Oggetti (molto simili agli array) sono contenitori di dati racchiusi in parentesi graffe 
  { } il loro contenuto è una coppia di chiave valore



*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


let myName = 'Christian';




/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
 */

console.log(myName);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x =12;


/* ESERCIZIO 5
Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*
const  myName = 'Christian'; 
console.log(myname)


const esercizio5 = {
  myName2 : 'Tripodi';

}

esercizio5.myName = 'Tripodi';
console.log(esercizio5.myName2);
*/


/*

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 ='john';
let name2 ='John';

name2 = 'john';

console.log(name1 == name2);





