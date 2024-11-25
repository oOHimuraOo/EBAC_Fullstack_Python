import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { food } from '../../utils/Converter'
import { deliveryInfo, paymentInfo } from '../../services/api'

type CartState = {
  itens: food[]
  is_open: boolean
  is_rendering: number
  deliveryInfo: deliveryInfo
  paymentInfo: paymentInfo
}

const initialState: CartState = {
  itens: [],
  is_open: false,
  is_rendering: 0,
  deliveryInfo: {
    receiver: '',
    address: {
      description: '',
      zipCode: '',
      number: 0,
      complement: '',
      city: ''
    }
  },
  paymentInfo: {
    card: {
      code: 0,
      expires: {
        month: 0,
        year: 0
      },
      name: '',
      number: ''
    }
  }
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<food>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index < 0) {
        state.itens.push(action.payload)
      } else {
        state.itens[index].qtd++
      }
    },
    open: (state) => {
      state.is_open = true
    },
    close: (state) => {
      state.is_open = false
    },
    reduce: (state, action: PayloadAction<food>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index >= 0) {
        state.itens[index].qtd--
        if (state.itens[index].qtd <= 0) {
          state.itens = state.itens.filter(
            (item) => item.id !== action.payload.id
          )
        }
      }
    },
    remove: (state, action: PayloadAction<food>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) {
        state.itens = state.itens.filter(
          (item) => item.id !== action.payload.id
        )
      }
    },
    ChangeCheckoutRender: (state, action: PayloadAction<number>) => {
      state.is_rendering = action.payload
    },
    ChangeAdress: (state, action: PayloadAction<deliveryInfo>) => {
      state.deliveryInfo = action.payload
    },
    changePayment: (state, action: PayloadAction<paymentInfo>) => {
      state.paymentInfo = action.payload
    },
    ClearAll: (state) => {
      state.itens = []
      state.is_open = false
      state.is_rendering = 0
      state.deliveryInfo = {
        receiver: '',
        address: {
          description: '',
          zipCode: '',
          number: 0,
          complement: '',
          city: ''
        }
      }
      state.paymentInfo = {
        card: {
          code: 0,
          expires: {
            month: 0,
            year: 0
          },
          name: '',
          number: ''
        }
      }
    }
  }
})

export const {
  add,
  open,
  close,
  reduce,
  remove,
  ChangeCheckoutRender,
  ChangeAdress,
  changePayment,
  ClearAll
} = carrinhoSlice.actions
export default carrinhoSlice.reducer
