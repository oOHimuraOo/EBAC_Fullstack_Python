var meuMap = new Map()
meuMap.set('nome', "gian")
meuMap.set("stack", "[html, css, js]")
console.log(meuMap)

console.log(meuMap.get('nome'))

console.log(meuMap.size)

console.log(meuMap.has('nome'))

console.log(meuMap.has('sobrenome'))

//meuMap.clear()

console.log(meuMap.size)

for (var chave of meuMap.keys()) {
    console.log(chave)
    console.log(meuMap.get(chave))
}


for (var value of meuMap.values()) {
    console.log(value)
}

for (var [entrada] of meuMap.entries()) {
    console.log(entrada)
}

for (var [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

console.log(meuMap)
meuMap.delete("stack")
console.log(meuMap)


const cpfs = new Set()
cpfs.add(123456789)
cpfs.add(987654321)
cpfs.add(147896325)
cpfs.add(987410236)

console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((value) => {
    console.log(value)
})

const array = ['gian souza', 'felipe cerqueira', 'luana piovani', 'gian souza', 'felipe cerqueira']
const novoSet = new Set([...array])

console.log(novoSet)

const setToArray = [...novoSet]
console.log(setToArray)