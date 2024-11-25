"use strict";
class Conta {
    constructor(numeroDaconta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaconta;
    }
    consultar() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaSalario extends Conta {
    constructor() {
        super(...arguments);
        this.fgts = 0;
    }
    verificarFGTS() {
        return this.fgts;
    }
}
class ContaCorrente extends Conta {
    constructor(numeroDaConta, taxaDeTransferencia) {
        super(numeroDaConta);
        this.taxaTransferencia = taxaDeTransferencia;
    }
    transferir(valor, destinatario) {
        try {
            this.saldo -= this.taxaTransferencia + valor;
            destinatario.depositar(valor);
            return true;
        }
        catch (e) {
            return false;
        }
    }
}
const ContaDoFelipe = new ContaCorrente(123456789, 50);
const contaDoHimura = new ContaSalario(12345678910);
console.log(ContaDoFelipe);
ContaDoFelipe.consultar();
ContaDoFelipe.depositar(3000);
contaDoHimura.consultar();
ContaDoFelipe.transferir(150, contaDoHimura);
ContaDoFelipe.consultar();
contaDoHimura.consultar();
contaDoHimura.verificarFGTS();
