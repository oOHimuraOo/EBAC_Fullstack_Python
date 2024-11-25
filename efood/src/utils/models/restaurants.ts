import FoodClass from './food'

class RestaurantClass {
  id: number
  image: string
  name: string
  news: string
  style: string
  score: string
  description: string
  linkTitle: string
  link: string
  food: FoodClass[]

  constructor(
    id: number,
    image: string,
    name: string,
    news: string,
    style: string,
    score: string,
    description: string,
    linkTitle: string,
    link: string,
    food: FoodClass[]
  ) {
    this.id = id
    this.image = image
    this.name = name
    this.news = news
    this.style = style
    this.score = score
    this.description = description
    this.link = link
    this.linkTitle = linkTitle
    this.food = food
  }
}

export default RestaurantClass
