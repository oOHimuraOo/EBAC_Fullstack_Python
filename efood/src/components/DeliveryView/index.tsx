import { verificarCEP } from '../../utils/Validators'
import { BotaoEstilo } from '../Button/styles'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  ChangeAdress,
  ChangeCheckoutRender
} from '../../store/reducers/carrinho'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { deliveryInfo } from '../../services/api'
import { rootReducer } from '../../store'

const DeliveryView = () => {
  const dispatch = useDispatch()
  const { deliveryInfo } = useSelector((state: rootReducer) => state.carrinho)
  const form = useFormik({
    initialValues: {
      nome: deliveryInfo.receiver,
      cep: deliveryInfo.address.zipCode,
      numero:
        deliveryInfo.address.number === 0
          ? ''
          : deliveryInfo.address.number.toString(),
      endereco: deliveryInfo.address.description,
      cidade: deliveryInfo.address.city,
      complemento: deliveryInfo.address.complement
    },
    validationSchema: yup.object({
      cep: yup
        .string()
        .length(8, 'o cep precisa ter 8 digitos.')
        .required('o cep é obrigatorio'),
      numero: yup
        .string()
        .min(1, 'o numero precisa conter pelo menos 1 digito')
        .required('O numero é obrigatorio'),
      endereco: yup
        .string()
        .required('Digite um cep para preencher o endereço.'),
      cidade: yup
        .string()
        .required('Digite um cep valido para preencher a cidade.')
    }),
    onSubmit: (values) => {
      const newAdress: deliveryInfo = {
        receiver: values.nome,
        address: {
          description: values.endereco,
          city: values.cidade,
          complement: values.complemento,
          number: parseInt(values.numero),
          zipCode: values.cep
        }
      }
      dispatch(ChangeAdress(newAdress))
      ChageRender(2)
    }
  })

  const fetchEndereco = async (cep: string) => {
    try {
      const end = await verificarCEP(cep)
      if (end) {
        form.setFieldValue('endereco', end.endereco)
        form.setFieldValue('cidade', end.cidade)
      } else {
        console.error()
        form.setFieldValue('endereco', 'CEP inválido ou não encontrado.')
        form.setFieldValue('cidade', '')
      }
    } catch (error) {
      form.setFieldValue('endereco', 'Erro ao buscar o endereço')
      form.setFieldValue('cidade', '')
    }
  }

  const ChageRender = (value: number) => {
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
    <S.DeliveryContainer>
      <h3>Entrega</h3>
      <form onSubmit={form.handleSubmit}>
        <S.EtiquetasInput htmlFor="nome">quem ira receber:</S.EtiquetasInput>
        <S.InputArea
          value={form.values.nome}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          type="text"
          id="nome"
          name="nome"
        />
        <S.CepNumeroContainer>
          <div>
            <S.EtiquetasInput htmlFor="cep">CEP</S.EtiquetasInput>
            <S.InputArea
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={() => fetchEndereco(form.values.cep)}
              type="number"
              id="cep"
              name="cep"
            />
            <small>{getErrorMessage('cep', form.errors.cep)}</small>
          </div>
          <div>
            <S.EtiquetasInput htmlFor="numero">Numero</S.EtiquetasInput>
            <S.InputArea
              type="number"
              id="numero"
              value={form.values.numero}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              name="numero"
            />
            <small>{getErrorMessage('numero', form.errors.numero)}</small>
          </div>
        </S.CepNumeroContainer>
        <S.EtiquetasInput htmlFor="endereco">endereco</S.EtiquetasInput>
        <S.InputArea
          disabled
          value={form.values.endereco}
          onChange={form.handleChange}
          type="text"
          id="endereco"
          name="endereco"
        />
        <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
        <S.EtiquetasInput htmlFor="cidade">cidade</S.EtiquetasInput>
        <S.InputArea
          disabled
          type="text"
          id="cidade"
          value={form.values.cidade}
          onChange={form.handleChange}
          name="cidade"
        />
        <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
        <S.EtiquetasInput htmlFor="complemento">Complemento</S.EtiquetasInput>
        <S.ComplementInput
          id="complemento"
          name="complemento"
          value={form.values.complemento}
          onChange={form.handleChange}
        />
        <BotaoEstilo type="submit">Continuar com o pagamento</BotaoEstilo>
        <BotaoEstilo type="button" onClick={() => ChageRender(0)}>
          Voltar para o carrinho
        </BotaoEstilo>
      </form>
    </S.DeliveryContainer>
  )
}

export default DeliveryView
