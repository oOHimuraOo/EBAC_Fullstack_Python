import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PRIORIDADE, STATUS } from '../../utils/enums/tarefa'

type FIltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: PRIORIDADE | STATUS
}

const initialState: FIltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<FIltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alteraFiltro } = filtroSlice.actions
export default filtroSlice.reducer
