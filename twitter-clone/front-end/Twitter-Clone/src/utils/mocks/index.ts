import TweetClass from '../models/tweets'
import UserClass from '../models/users'
import perfil from '../../assets/imgs/icons/profile-circle-svgrepo-com.svg'

export const fakeUserDb: UserClass[] = []
export const fakeTweetsDb: TweetClass[] = []

export function novoUsuario(usuario: string, senha: string): void {
  const user = new UserClass(
    fakeUserDb.length,
    perfil,
    usuario,
    senha,
    [],
    false,
  )

  fakeUserDb.push(user)
}

export function novoTweet(usuario: string, post: string) {
  const user = fakeUserDb.find(user => user.name === usuario)

  if (!user) return

  const tweet = new TweetClass(fakeTweetsDb.length, user.profile, usuario, post)

  user.tweets.push(tweet)
  fakeTweetsDb.push(tweet)
}

export function usuarioLogado(usuario: string): boolean {
  for (const user of fakeUserDb) {
    if (user.name === usuario) {
      return user.logged_in
    }
  }
  return false
}

export function verificarUsuarioValido(usuario: string): boolean {
  for (const user of fakeUserDb) {
    if (user.name === usuario) {
      return false
    }
  }
  return true
}

export function logar(usuario: string, senha: string): void {
  for (const user of fakeUserDb) {
    if (user.name === usuario) {
      if (user.senha === senha) {
        user.logged_in = true
      } else {
        user.logged_in = false
      }
    } else {
      user.logged_in = false
    }
  }
}

export function deslogar(usuario: string): void {
  for (const user of fakeUserDb) {
    if (user.name === usuario) {
      user.logged_in = false
    }
  }
}
