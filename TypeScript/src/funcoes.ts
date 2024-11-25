function calculaArea(base:number, altura:number): number {
    return base * altura
}

const calculaArea2 = (base:number, altura:number):number => base * altura

function printar(...numeros:number[]):void {
    console.log(numeros)
}

function teste():string | number {
    if (10 > 5) {
        return 'dez maior que 5'
    } else {
        return 5
    }
}

const resultadoDeTeste: string | number = teste()

