class Pessoa {
    nome:string
    renda?: number

    constructor(nome:string, renda?:number) {
        this.nome = nome
        this.renda = renda
    }

    dizOla(): string {
        return `${this.nome} diz olá!`
    }

    revelaRenda():string {
        return `eu sou ${this.nome} e minha renda é: ${this.renda}`
    }
}

class contaBancaria {
    protected saldo: number = 0
    public numeroConta: number

    constructor (numeroDaConta: number) {
        this.numeroConta = numeroDaConta
    }

    getSaldo():number {
        return this.saldo;
    }

    depositar(valor: number):void {
        this.saldo += valor
    }
}

class ContaBancariaPessoaFisica extends contaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456789)

contaDoPedro.depositar(32)
contaDoPedro.getSaldo()