class FoodClass {
  id: number
  image: string
  promocao: string
  news: string
  name: string
  description: string
  price: string
  size: string
  link: string

  constructor(
    id: number,
    image: string,
    promocao: string,
    news: string,
    name: string,
    description: string,
    price: string,
    size: string,
    link: string
  ) {
    this.id = id
    this.image = image
    this.promocao = promocao
    this.news = news
    this.name = name
    this.description = description
    this.price = price
    this.size = size
    this.link = link
  }
}

export default FoodClass
