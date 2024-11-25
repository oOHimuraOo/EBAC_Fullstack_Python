import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import { PRIORIDADE, STATUS } from '../../utils/enums/tarefa'

type it = {
  itens: Tarefa[]
}
const initialState: it = {
  itens: []
}

const tarefaSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (tarefa) => tarefa.idx !== action.payload
      )
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'idx'>>) => {
      const tarefaJaExite = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExite) {
        alert('já existe uma tarefa com esse nome!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNava = {
          ...action.payload,
          idx: ultimaTarefa ? ultimaTarefa.idx + 1 : 0
        }
        state.itens.push(tarefaNava)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ idx: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.idx === action.payload.idx
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? STATUS.CONCLUIDO
          : STATUS.PENDENTE
      }
    }
  }
})

function retornaTarefas(quantidadeDeTarefas: number): Tarefa[] {
  const novoArray: Tarefa[] = []

  for (let x = 0; x < quantidadeDeTarefas; x++) {
    const valoresPrioridade = Object.values(PRIORIDADE)
    const valorPrioridadeAleatorio =
      valoresPrioridade[Math.floor(Math.random() * valoresPrioridade.length)]
    const val1: PRIORIDADE = valorPrioridadeAleatorio as PRIORIDADE

    const valoresStatus = Object.values(STATUS)
    const valorStatusAleatorio =
      valoresStatus[Math.floor(Math.random() * valoresStatus.length)]
    const val2: STATUS = valorStatusAleatorio as STATUS

    const t = new Tarefa(
      x,
      'Tarefa ' + x,
      val1,
      val2,
      'Essa é a descriação da Tarefa ' + x
    )
    const tn = { ...t }
    novoArray.push(tn)
  }
  return novoArray
}

export const { remover, cadastrar, alteraStatus } = tarefaSlice.actions
export default tarefaSlice.reducer
