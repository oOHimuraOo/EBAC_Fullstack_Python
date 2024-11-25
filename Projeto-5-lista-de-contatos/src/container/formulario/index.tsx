import { useState, FormEvent, useEffect } from 'react'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../estilos'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { GRUPOS, FAVORITOS } from '../../utilidades/enumeracoes'
import Contato from '../../modelos/Contato'
import { alteraFavoritos, cadastrar } from '../../armazen/redutores/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const seed = `${Math.random}`
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [endereco, setEndereco] = useState('')
  const [email, setEmail] = useState('')
  const [grupo, setGrupo] = useState(GRUPOS.NENHUM)
  const [favorito, setFavorito] = useState(FAVORITOS.FALSO)

  useEffect(() => {
    dispatch(alteraFavoritos({ nome: nome, favoritado: favorito }))
  }, [dispatch, nome, favorito])

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contaParaAdcionar = new Contato(
      1,
      nome,
      telefone,
      endereco,
      email,
      grupo,
      favorito
    )

    dispatch(cadastrar(contaParaAdcionar))
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <Campo
          required
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Digite aqui o nome do contato"
        />
        <Campo
          required
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="text"
          placeholder="Digite aqui o numero do contato"
        />
        <Campo
          value={endereco}
          onChange={({ target }) => setEndereco(target.value)}
          type="text"
          placeholder="Digite aqui o endereco do contato"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="Digite aqui o email do contato"
        />
        <S.Opcoes>
          <p>Grupos</p>
          {Object.values(GRUPOS).map((g) => (
            <S.Opcao key={g}>
              <input
                type="radio"
                value={g}
                name="grupos"
                id={g}
                defaultChecked={g === GRUPOS.NENHUM}
                onChange={(e) => setGrupo(e.target.value as GRUPOS)}
              />
              <label htmlFor={g}>{g}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <S.Opcoes>
          <p>Favoritos</p>
          <S.EstrelaContainer>
            <S.EstrelaInput
              type="checkbox"
              id={seed}
              onChange={(e) =>
                e.target.checked
                  ? setFavorito(FAVORITOS.VERDADEIRO)
                  : setFavorito(FAVORITOS.FALSO)
              }
            />
            <S.EstrelaLabel htmlFor={seed} />
          </S.EstrelaContainer>
        </S.Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario
