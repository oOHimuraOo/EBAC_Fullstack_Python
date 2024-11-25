import { useEffect, useState } from 'react'
import { BotaoEstilo } from '../Button/styles'
import { EndContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeCheckoutRender, ClearAll } from '../../store/reducers/carrinho'
import { usePurchaseMutation } from '../../services/api'
import { rootReducer } from '../../store'
import { converteProdutos } from '../../utils/Converter'

const EndView = () => {
  const [hasSubmited, setHasSubmited] = useState(false)
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()
  const { itens, deliveryInfo, paymentInfo } = useSelector(
    (state: rootReducer) => state.carrinho
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (!hasSubmited) {
      const produtosFormatados = converteProdutos(itens)
      purchase({
        payment: {
          card: {
            code: paymentInfo.card.code,
            expires: {
              month: paymentInfo.card.expires.month,
              year: paymentInfo.card.expires.year
            },
            name: paymentInfo.card.name,
            number: paymentInfo.card.number
          }
        },
        delivery: {
          address: {
            city: deliveryInfo.address.city,
            complement: deliveryInfo.address.complement,
            description: deliveryInfo.address.description,
            number: deliveryInfo.address.number,
            zipCode: deliveryInfo.address.zipCode
          },
          receiver: deliveryInfo.receiver
        },
        products: produtosFormatados
      })
      setHasSubmited(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSubmited])

  const sucesso = () => {
    const timer = setTimeout(() => {
      dispatch(ClearAll())
    }, 60000)

    function finalizarTudo() {
      clearTimeout(timer)
      dispatch(ClearAll())
    }
    return (
      <>
        <h3>Pedido realizado - {data?.orderId}</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <BotaoEstilo onClick={() => finalizarTudo()}>Concluir</BotaoEstilo>
      </>
    )
  }

  const falha = () => (
    <>
      <h3>Pedido não realizado - 1231231</h3>
      <p>
        <b>Transação negada!</b> Não foi possivel criar a Transação de cartão de
        crédito no momento, por favor tente novamente. Se o erro persistir entre
        em contato com a instituição.
      </p>
      <BotaoEstilo onClick={() => changeRender(1)}>
        Modificar Informacoes
      </BotaoEstilo>
      <BotaoEstilo onClick={() => console.log(data)}>
        Tentar Novamente
      </BotaoEstilo>
    </>
  )

  const changeRender = (value: number) => {
    dispatch(ChangeCheckoutRender(value))
  }

  if (isLoading) {
    return (
      <EndContainer>
        <h3>Processando Pagamento...</h3>
      </EndContainer>
    )
  }

  if (isError) {
    return <EndContainer>{falha()}</EndContainer>
  }
  if (!isSuccess && data === undefined) {
    return (
      <EndContainer>
        <h3>Processando Pagamento...</h3>
      </EndContainer>
    )
  }

  return <EndContainer>{sucesso()}</EndContainer>
}

export default EndView
