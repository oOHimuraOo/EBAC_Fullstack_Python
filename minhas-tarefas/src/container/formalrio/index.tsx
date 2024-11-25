import { FormEvent, useState } from 'react'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import { useDispatch } from 'react-redux'
import { PRIORIDADE, STATUS } from '../../utils/enums/tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(PRIORIDADE.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      1,
      titulo,
      prioridade,
      STATUS.PENDENTE,
      descricao
    )

    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          required
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="Digite aqui o titulo de sua tarefa"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Digite aqui a descrição da sua tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(PRIORIDADE).map((p) => (
            <Opcao key={p}>
              <input
                value={p}
                name="prioridade"
                type="radio"
                id={p}
                defaultChecked={p === PRIORIDADE.NORMAL}
                onChange={(e) => setPrioridade(e.target.value as PRIORIDADE)}
              />
              <label htmlFor={p}>{p}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
