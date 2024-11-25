class TweetClass {
  id: number
  img: string
  name: string
  post: string
  data: string
  hour: string

  constructor(id: number, img: string, name: string, post: string) {
    this.id = id
    this.img = img
    this.name = name
    this.post = post

    const now = new Date()

    this.data = now.toLocaleDateString('pt-br')
    this.hour = now.toLocaleTimeString('pt-br')
  }
}

export default TweetClass
