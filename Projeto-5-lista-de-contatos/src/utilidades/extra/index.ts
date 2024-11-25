import Contato from '../../modelos/Contato'
import { FAVORITOS, GRUPOS } from '../enumeracoes'

const arrayDeNomes = [
  'Felipe',
  'Roberto',
  'Pedro',
  'Irineu',
  'André',
  'Marcela',
  'Roberta',
  'Clara',
  'Renata',
  'Cândida'
]
const arrayDeSobrenomes = [
  'Silva',
  'Rocha',
  'Cerqueira',
  'Santos',
  'Costa',
  'Magarao',
  'Dias',
  'Meneguel',
  'Carvalho',
  'Fernandes'
]

const arrayDeEnderecos = [
  'São Paulo, Vila Mariana, Rua Vergueiro',
  'Rio de Janeiro, Copacabana, Avenida Atlântica',
  'Belo Horizonte, Savassi, Rua Pernambuco',
  'Porto Alegre, Moinhos de Vento, Rua Padre Chagas',
  'Curitiba, Batel, Avenida do Batel',
  'Salvador, Barra, Rua Marquês de Caravelas',
  'Florianópolis, Centro, Rua Felipe Schmidt',
  'Fortaleza, Meireles, Avenida Beira Mar',
  'Brasília, Asa Sul, SQS 308',
  'Recife, Boa Viagem, Avenida Conselheiro Aguiar'
]

const arrayDeTelefones = [
  '(11) 9 1234-5678',
  '(21) 9 2345-6789',
  '(31) 9 3456-7890',
  '(41) 9 4567-8901',
  '(51) 9 5678-9012',
  '(61) 9 6789-0123',
  '(71) 9 7890-1234',
  '(81) 9 8901-2345',
  '(91) 9 9012-3456',
  '(11) 9 0123-4567',
  '(21) 9 1234-5678',
  '(31) 9 2345-6789',
  '(41) 9 3456-7890',
  '(51) 9 4567-8901',
  '(61) 9 5678-9012',
  '(71) 9 6789-0123',
  '(81) 9 7890-1234',
  '(91) 9 8901-2345',
  '(11) 9 9012-3456',
  '(21) 9 0123-4567',
  '(31) 9 1234-5678',
  '(41) 9 2345-6789',
  '(51) 9 3456-7890',
  '(61) 9 4567-8901',
  '(71) 9 5678-9012',
  '(81) 9 6789-0123',
  '(91) 9 7890-1234',
  '(11) 9 8901-2345',
  '(21) 9 9012-3456',
  '(31) 9 0123-4567',
  '(41) 9 1234-5678',
  '(51) 9 2345-6789',
  '(61) 9 3456-7890',
  '(71) 9 4567-8901',
  '(81) 9 5678-9012',
  '(91) 9 6789-0123',
  '(11) 9 7890-1234',
  '(21) 9 8901-2345',
  '(31) 9 9012-3456',
  '(41) 9 0123-4567',
  '(51) 9 1234-5678',
  '(61) 9 2345-6789',
  '(71) 9 3456-7890',
  '(81) 9 4567-8901',
  '(91) 9 5678-9012',
  '(11) 9 6789-0123',
  '(21) 9 7890-1234',
  '(31) 9 8901-2345',
  '(41) 9 9012-3456',
  '(51) 9 0123-4567',
  '(61) 9 1234-5678',
  '(71) 9 2345-6789',
  '(81) 9 3456-7890',
  '(91) 9 4567-8901',
  '(11) 9 5678-9012',
  '(21) 9 6789-0123',
  '(31) 9 7890-1234',
  '(41) 9 8901-2345',
  '(51) 9 9012-3456',
  '(61) 9 0123-4567',
  '(71) 9 1234-5678',
  '(81) 9 2345-6789',
  '(91) 9 3456-7890',
  '(11) 9 4567-8901',
  '(21) 9 5678-9012',
  '(31) 9 6789-0123',
  '(41) 9 7890-1234',
  '(51) 9 8901-2345',
  '(61) 9 9012-3456',
  '(71) 9 0123-4567',
  '(81) 9 1234-5678',
  '(91) 9 2345-6789',
  '(11) 9 3456-7890',
  '(21) 9 4567-8901',
  '(31) 9 5678-9012',
  '(41) 9 6789-0123',
  '(51) 9 7890-1234',
  '(61) 9 8901-2345',
  '(71) 9 9012-3456',
  '(81) 9 0123-4567',
  '(91) 9 1234-5678',
  '(11) 9 2345-6789',
  '(21) 9 3456-7890',
  '(31) 9 4567-8901',
  '(41) 9 5678-9012',
  '(51) 9 6789-0123',
  '(61) 9 7890-1234',
  '(71) 9 8901-2345',
  '(81) 9 9012-3456',
  '(91) 9 0123-4567'
]

function geraContatos(quantidade: number): Contato[] {
  const novoArray: Contato[] = []
  for (let x = 0; x < quantidade; x++) {
    const nome = `${
      arrayDeNomes[Math.floor(Math.random() * arrayDeNomes.length)]
    } ${
      arrayDeSobrenomes[Math.floor(Math.random() * arrayDeSobrenomes.length)]
    }`
    const email = `${nome.replace(/\s+/g, '')}.email${x}.com`
    const endereco =
      arrayDeEnderecos[Math.floor(Math.random() * arrayDeEnderecos.length)]
    const telefone =
      arrayDeTelefones[Math.floor(Math.random() * arrayDeTelefones.length)]
    const grupos = Object.values(GRUPOS)
    const favoritos = Object.values(FAVORITOS)
    const novoContato = new Contato(
      x,
      nome,
      telefone,
      endereco,
      email,
      grupos[Math.floor(Math.random() * grupos.length)] as GRUPOS,
      favoritos[Math.floor(Math.random() * favoritos.length)] as FAVORITOS
    )
    novoArray.push(novoContato)
  }

  return novoArray
}

export default geraContatos
