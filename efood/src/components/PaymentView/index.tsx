import { BotaoEstilo } from '../Button/styles'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  ChangeCheckoutRender,
  changePayment
} from '../../store/reducers/carrinho'
import { converteData, converterFormatacaoDePreco } from '../../utils/Converter'
import { rootReducer } from '../../store'
import { useFormik } from 'formik'
import * as yup from 'yup'

const PaymentView = () => {
  const { itens } = useSelector((state: rootReducer) => state.carrinho)
  const dispatch = useDispatch()
  const form = useFormik({
    initialValues: {
      nome: '',
      email: '',
      numero: '',
      cvv: '',
      date: ''
    },
    validationSchema: yup.object({
      nome: yup.string().required('Esse campo é obrigatório!'),
      email: yup
        .string()
        .email('O E-mail está invalido.')
        .required('Esse campo é obrigatório!'),
      numero: yup.string().required('Esse campo é obrigatório!'),
      cvv: yup.string().required('Esse campo é obrigatório!'),
      date: yup.string().required('Esse campo é obrigatório!')
    }),
    onSubmit: (values) => {
      dispatch(
        changePayment({
          card: {
            code: parseInt(values.cvv),
            expires: {
              month: converteData(values.date)[1],
              year: converteData(values.date)[0]
            },
            name: values.nome,
            number: values.numero
          }
        })
      )
      changeRender(3)
    }
  })

  function calcularTotalASerPago(): number {
    let valorAcumulado = 0
    itens.forEach((item) => {
      const preco = item.price
      const qtd = item.qtd
      valorAcumulado += parseFloat(preco) * qtd
    })
    return valorAcumulado
  }

  function changeRender(value: number) {
    dispatch(ChangeCheckoutRender(value))
  }

  const getErrorMessage = (value: string, message?: string) => {
    const isModified = value in form.touched
    const isinvalid = value in form.errors

    if (isModified && isinvalid) {
      return message
    }
    return ''
  }

  return (
    <S.PaymentContainer>
      <h3>
        Pagamento - Valor a Pagar{' '}
        {converterFormatacaoDePreco(calcularTotalASerPago())}
      </h3>
      <form onSubmit={form.handleSubmit}>
        <S.EtiquetasInput htmlFor="nome">Nome no cartao</S.EtiquetasInput>
        <S.InputArea
          type="text"
          id="nome"
          name="nome"
          value={form.values.nome}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMessage('nome', form.errors.nome)}</small>
        <S.EtiquetasInput htmlFor="email">E-mail</S.EtiquetasInput>
        <S.InputArea
          type="email"
          id="email"
          name="email"
          value={form.values.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMessage('email', form.errors.email)}</small>
        <S.EtiquetasInput htmlFor="numero">Numero do cartao</S.EtiquetasInput>
        <S.InputArea
          type="number"
          id="numero"
          name="numero"
          value={form.values.numero}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMessage('numero', form.errors.numero)}</small>
        <S.CvvVencimentoContainer>
          <div>
            <S.EtiquetasInput htmlFor="cvv">CVV</S.EtiquetasInput>
            <S.InputArea
              type="number"
              id="cvv"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
          </div>
          <div>
            <S.EtiquetasInput htmlFor="date">Vencimento</S.EtiquetasInput>
            <S.InputArea
              type="month"
              id="date"
              name="date"
              value={form.values.date}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('date', form.errors.date)}</small>
          </div>
        </S.CvvVencimentoContainer>
        <BotaoEstilo type="submit">Finalizar pagamento</BotaoEstilo>
        <BotaoEstilo type="button" onClick={() => changeRender(1)}>
          Voltar para edicao de endereco
        </BotaoEstilo>
        <BotaoEstilo type="button" onClick={() => changeRender(0)}>
          Voltar para o carrinho
        </BotaoEstilo>
      </form>
    </S.PaymentContainer>
  )
}

export default PaymentView
