class bebida {
    constructor(argumentos) {
        if (!argumentos) {
            throw new Error('Precisa ter um argumento!')
        }
        
        var _nome = argumentos.nome 
        var _alcoolico = argumentos.alcoolico 
        
        Object.defineProperty(this, 'nome', {
            get: function () {
                return _nome
            },
            set: function(valor) {
                if (valor === _nome) {
                    return valor
                } else {
                    alert('valor descartado por não corresponder ao nome em registro. Tente modificar o valor usando setNome.')
                    return _nome
                }
            }
        })

        Object.defineProperty(this, 'alcoolico', {
            get: function () {
                return _alcoolico
            },
            set: function(valor) {
                if (valor === _alcoolico) {
                    return valor
                } else {
                    alert('valor descartado por não corresponder ao alcoolico em registro. Tente modificar o valor usando setAlcoolico.')
                    return _alcoolico
                }
            }
        })

        this.getNome = () => _nome
        this.getAlcoolico = () => _alcoolico
        this.setNome = (valor) => typeof valor === 'string' && (_nome = valor) && (this.nome = _nome)
        this.setAlcoolico = (valor) => typeof valor === 'boolean' && (_alcoolico = valor) && (this.alcoolico = _alcoolico)
    }
}

class cerveja extends bebida {
    constructor(argumentos) {
        super(argumentos) 
        
        var _marca = argumentos.marca 
        var _estilo = argumentos.estilo 

        Object.defineProperty(this, 'marca', {
            get: function () {
                return _marca
            },
            set: function(valor) {
                if (valor === _marca) {
                    return valor
                } else {
                    alert('valor descartado por não corresponder à marca em registro. Tente modificar o valor usando setMarca.')
                    return _marca
                }
            }
        })

        Object.defineProperty(this, 'estilo', {
            get: function () {
                return _estilo
            },
            set: function(valor) {
                if (valor === _estilo) {
                    return valor
                } else {
                    alert('valor descartado por não corresponder ao estilo em registro. Tente modificar o valor usando setEstilo.')
                    return _estilo
                }
            }
        })

        this.getMarca = () => _marca
        this.getEstilo = () => _estilo
        this.setMarca = (valor) => typeof valor === 'string' && (_marca = valor) && (this.marca = _marca)
        this.setEstilo = (valor) => typeof valor === 'string' && (_estilo = valor) && (this.estilo = _estilo)
    }
}

class refrigerante extends bebida {
    constructor(argumentos) {
        super(argumentos)

        var _marca = argumentos.marca 
        var _sabor = argumentos.sabor 

        Object.defineProperty(this, 'marca', {
            get: function () {
                return _marca
            },
            set: function(valor) {
                if (valor === _marca) {
                    return valor
                } else {
                    alert('valor descartado por não corresponder à marca em registro. Tente modificar o valor usando setMarca.')
                    return _marca
                }
            }
        })

        Object.defineProperty(this, 'sabor', {
            get: function () {
                return _sabor
            },
            set: function(valor) {
                if (valor === _sabor) {
                    return valor
                } else {
                    alert('valor descartado por não corresponder ao sabor em registro. Tente modificar o valor usando setSabor.')
                    return _sabor
                }
            }
        })

        this.getMarca = () => _marca
        this.getSabor = () => _sabor
        this.setMarca = (valor) => typeof valor === 'string' && (_marca = valor) && (this.marca = _marca)
        this.setSabor = (valor) => typeof valor === 'string' && (_sabor = valor) && (this.sabor = _sabor)
    }
}

class suco extends bebida {
    constructor(argumentos) {
        super(argumentos)

        var _fruta = argumentos.fruta || 'não informado'
        var _tipo = argumentos.tipo || 'não informado'

        Object.defineProperty(this, 'fruta', {
            get: function () {
                return _fruta
            },
            set: function(valor) {
                if (valor === _fruta) {
                    return valor
                } else {
                    alert('valor descartado por não corresponder à fruta em registro. Tente modificar o valor usando setFruta.')
                    return _fruta
                }
            }
        })

        Object.defineProperty(this, 'tipo', {
            get: function () {
                return _tipo
            },
            set: function(valor) {
                if (valor === _tipo) {
                    return valor
                } else {
                    alert('valor descartado por não corresponder ao tipo em registro. Tente modificar o valor usando setTipo.')
                    return _tipo
                }
            }
        })
        
        this.getFruta = () => _fruta
        this.getTipo = () => _tipo
        this.setFruta = (valor) => typeof valor === 'string' && (_fruta = valor) && (this.fruta = _fruta)
        this.setTipo = (valor) => typeof valor === 'string' && (_tipo = valor) && (this.tipo = _tipo)
    }
}

function geradorDeCervejas(nome, alcoolico, marca, estilo) {
    return new cerveja({nome, alcoolico, marca, estilo})
}

function geradorDeRefrigerante(nome, alcoolico, marca, sabor) {
    return new refrigerante({nome, alcoolico, marca, sabor})
}

function geradorDeSuco(nome, alcoolico, fruta, tipo) {
    return new suco({nome, alcoolico, fruta, tipo})
}

const heineken = geradorDeCervejas('heineken', true, 'heineken', 'pilsen')
// heineken = {
//     nome: 'heineken',
//     alcoolico: true,
//     marca: 'heineken',
//     estilo: 'pilsen'
//}

const coca_cola = geradorDeRefrigerante('coca-cola', false, 'coca-cola', 'cola')
// heineken = {
//     nome: 'coca-cola',
//     alcoolico: true,
//     marca: 'coca-cola',
//     sabor: 'cola'
//}

const laranja = geradorDeSuco('suco de laranja', false, 'laranja', 'citrico')
// heineken = {
//     nome: 'suco de laranja',
//     alcoolico: true,
//     fruta: 'laranja',
//     tipo: 'citrico'
//}

//as propriedades só podem ser alteradas com seu setter. e a solicitação de retorno delas sempre irá retornar o valor da variavel privada. Tanto se você chamar pelo getter ou pelo valor direto da propriedade.


