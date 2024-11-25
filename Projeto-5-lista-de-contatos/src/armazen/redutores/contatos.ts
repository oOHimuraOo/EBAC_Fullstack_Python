import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../modelos/Contato'
import { FAVORITOS } from '../../utilidades/enumeracoes'
import geraContatos from '../../utilidades/extra'

type EstadoInicialTipo = {
  itens: Contato[]
}

const initialState: EstadoInicialTipo = {
  itens: geraContatos(13)
}

const contatoFatia = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.idx !== action.payload
      )
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'idx'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Contato Já cadastrado')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          idx: ultimoContato ? ultimoContato.idx + 1 : 0
        }

        state.itens.push(contatoNovo)
      }
    },
    alteraFavoritos: (
      state,
      action: PayloadAction<{ nome: string; favoritado: FAVORITOS }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.nome === action.payload.nome
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].favoritos = action.payload.favoritado
      }
    }
  }
})

export const { remover, cadastrar, alteraFavoritos } = contatoFatia.actions
export default contatoFatia.reducer
