import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GRUPOS } from '../../utilidades/enumeracoes'

type FiltroEstadoTipo = {
  termo?: string
  criterio: 'grupos' | 'todos' | 'nenhum' | 'favoritados'
  valor?: GRUPOS
}

const initialState: FiltroEstadoTipo = {
  termo: '',
  criterio: 'todos'
}

const FiltroFatia = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<FiltroEstadoTipo>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alteraFiltro } = FiltroFatia.actions
export default FiltroFatia.reducer
