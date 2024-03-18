interface iSmartphone{
    credito:number
    numeroChiamate:number
}



class User implements iSmartphone {
    credito:number = 0
    numeroChiamate:number = 0
    costoMinuto:number = 0.2
    nome:string
    cognome:string
    

    constructor(nome:string, cognome:string, credito?:number){
        this.nome = nome
        this.cognome = cognome
        this.credito = credito || 0
    }



    ricarica(c:number){
        this.credito += c
    }
    chiamata(minuti:number):void{
        let costo = this.costoMinuto * minuti;
        this.credito -= costo;
        this.numeroChiamate++
    }

    chiama404():string{
        return this.credito + '€'
    }


    getNumeroChimate():number{
        return this.numeroChiamate
    }


    azzeraChiamate():void{
        this.numeroChiamate = 0
    }



}

let user = new User('Mario', 'Rossi',30)

user.ricarica(50)
user.chiamata(20)

console.log(user)

console.log(user.chiama404())
console.log(user.getNumeroChimate())

user.azzeraChiamate()

console.log(user.getNumeroChimate())