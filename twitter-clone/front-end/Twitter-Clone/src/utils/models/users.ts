import type TweetClass from './tweets'

class UserClass {
  id: number
  profile: string
  name: string
  senha: string
  tweets: TweetClass[]
  logged_in: boolean

  constructor(
    id: number,
    profile: string,
    name: string,
    senha: string,
    tweets: TweetClass[],
    logged_in: boolean,
  ) {
    this.id = id
    this.profile = profile
    this.name = name
    this.senha = senha
    this.tweets = tweets
    this.logged_in = logged_in
  }
}

export default UserClass
