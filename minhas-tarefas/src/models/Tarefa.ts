import { PRIORIDADE, STATUS } from '../utils/enums/tarefa'

export default class Tarefa {
  idx: number
  titulo: string
  prioridade: PRIORIDADE
  status: STATUS
  descricao: string

  constructor(
    idx: number,
    titulo: string,
    prioridade: PRIORIDADE,
    status: STATUS,
    descricao: string
  ) {
    this.idx = idx
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
  }
}
