import { configureStore } from '@reduxjs/toolkit'
import contatoRedutor from './redutores/contatos'
import filtroRedutor from './redutores/filtro'

const armazen = configureStore({
  reducer: {
    contato: contatoRedutor,
    filtro: filtroRedutor
  }
})

export type EstadoRaiz = ReturnType<typeof armazen.getState>
export default armazen
