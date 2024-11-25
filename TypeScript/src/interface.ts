class Conta {
    numeroDaConta: number
    saldo: number = 0

    constructor (numeroDaconta:number) {
        this.numeroDaConta = numeroDaconta
    }

    consultar():number {
        return this.saldo
    }
    
    depositar(valor: number ) {
        this.saldo += valor
    }
}

class ContaSalario extends Conta {
    fgts: number = 0

    verificarFGTS():number {
        return this.fgts
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

class ContaCorrente extends Conta implements ITransacional {
    taxaTransferencia: number
    constructor(numeroDaConta:number, taxaDeTransferencia:number) {
        super(numeroDaConta)
        this.taxaTransferencia = taxaDeTransferencia
    }

    transferir(valor:number, destinatario: Conta) : boolean {
        try {
            this.saldo -= this.taxaTransferencia + valor
            destinatario.depositar(valor)
            return true
        } catch (e) {
            return false
        }
    }
}

const ContaDoFelipe: ContaCorrente = new ContaCorrente(123456789, 50)
const contaDoHimura: ContaSalario = new ContaSalario(12345678910)
console.log(ContaDoFelipe)

ContaDoFelipe.consultar()
ContaDoFelipe.depositar(3000)
contaDoHimura.consultar()
ContaDoFelipe.transferir(150,contaDoHimura)
ContaDoFelipe.consultar()
contaDoHimura.consultar()
contaDoHimura.verificarFGTS()