import { GRUPOS, FAVORITOS } from '../utilidades/enumeracoes'

export default class Contato {
  idx: number
  nome: string
  telefone: string
  endereco: string
  email: string
  grupos: GRUPOS
  favoritos: FAVORITOS

  constructor(
    idx: number,
    nome: string,
    telefone: string,
    endereco: string,
    email: string,
    grupos: GRUPOS,
    favoritos: FAVORITOS
  ) {
    this.idx = idx
    this.nome = nome
    this.telefone = telefone
    this.endereco = endereco
    this.email = email
    this.grupos = grupos
    this.favoritos = favoritos
  }
}
