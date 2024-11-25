import FoodClass from '../models/food'
import RestaurantClass from '../models/restaurants'

const ASub: string[] = [
  'Sabor',
  'Prato',
  'Menu',
  'Aroma',
  'Temperos',
  'Bebida',
  'Serviço',
  'Estilo',
  'Ambiente',
  'Experiência',
  'Cozinha',
  'Espaço',
  'Mesa',
  'Cliente',
  'Café',
  'Petisco',
  'Refresco',
  'Detalhe',
  'Vinho',
  'Doces',
  'Salada',
  'Lanche',
  'Snack',
  'Harmonização',
  'Festa',
  'Ponto',
  'Esquina',
  'Mistura',
  'Sombra',
  'Raiz'
]

const AAdj: string[] = [
  'Delicioso',
  'Saboroso',
  'Fresco',
  'Aconchegante',
  'Elegante',
  'Autêntico',
  'Cativante',
  'Agradável',
  'Irresistível',
  'Suave',
  'Colorido',
  'Refinado',
  'Divertido',
  'Intenso',
  'Sutil',
  'Leve',
  'Único',
  'Tradição',
  'Contemporâneo',
  'Rústico',
  'Estiloso',
  'Vibrante',
  'Criativo',
  'Culinarístico',
  'Prático',
  'Inspirador',
  'Harmonioso',
  'Diferente',
  'Mágico',
  'Reconfortante'
]

const RNew: string[] = ['Novidade', 'Oferta da semana', 'Mais pedido', '']

// const AEP: { [key: string]: string[] } = {
//   Italiana: [
//     'Pizza Margherita',
//     'Spaghetti Carbonara',
//     'Lasagna',
//     'Risotto',
//     'Ravioli',
//     'Tiramisu',
//     'Gnocchi',
//     'Panna Cotta',
//     'Bruschetta',
//     'Focaccia'
//   ],
//   Chinesa: [
//     'Frango Xadrez',
//     'Pato à Pequim',
//     'Arroz Chop Suey',
//     'Sopa de Wonton',
//     'Rolinhos Primavera',
//     'Tofu Mapo',
//     'Macarrão Chow Mein',
//     'Carne de Porco Agridoce',
//     'Arroz Frito',
//     'Dim Sum'
//   ],
//   Espanhola: [
//     'Paella',
//     'Tortilla Espanhola',
//     'Gazpacho',
//     'Jamón Ibérico',
//     'Pulpo a la Gallega',
//     'Croquetas',
//     'Churros com Chocolate',
//     'Fabada Asturiana',
//     'Patatas Bravas',
//     'Calamares Fritos'
//   ],
//   Portuguesa: [
//     'Bacalhau à Brás',
//     'Francesinha',
//     'Caldo Verde',
//     'Sardinhas Assadas',
//     'Alheira',
//     'Arroz de Pato',
//     'Polvo à Lagareiro',
//     'Bifana',
//     'Amêijoas à Bulhão Pato',
//     'Pastéis de Nata'
//   ],
//   Japonesa: [
//     'Sushi',
//     'Ramen',
//     'Tempura',
//     'Takoyaki',
//     'Sashimi',
//     'Udon',
//     'Miso Soup',
//     'Okonomiyaki',
//     'Katsu Curry',
//     'Mochi'
//   ],
//   Baiana: [
//     'Acarajé',
//     'Vatapá',
//     'Moqueca Baiana',
//     'Caruru',
//     'Bobó de Camarão',
//     'Cozido Baiano',
//     'Abará',
//     'Xinxin de Galinha',
//     'Mungunzá',
//     'Quindim'
//   ],
//   Brasileira: [
//     'Feijoada',
//     'Pão de Queijo',
//     'Churrasco',
//     'Brigadeiro',
//     'Coxinha',
//     'Tapioca',
//     'Farofa',
//     'Açaí na Tigela',
//     'Quibe',
//     'Escondidinho'
//   ],
//   Francesa: [
//     'Coq au Vin',
//     'Ratatouille',
//     'Bouillabaisse',
//     'Quiche Lorraine',
//     'Croissant',
//     'Crème Brûlée',
//     'Escargot',
//     'Cassoulet',
//     'Tarte Tatin',
//     'Soupe à l’oignon'
//   ],
//   Alemã: [
//     'Schnitzel',
//     'Bratwurst',
//     'Currywurst',
//     'Pretzel',
//     'Sauerkraut',
//     'Kartoffelsalat',
//     'Schwarzwälder Kirschtorte',
//     'Apfelstrudel',
//     'Eisbein',
//     'Rouladen'
//   ],
//   Arabe: [
//     'Falafel',
//     'Hummus',
//     'Tabule',
//     'Kebab',
//     'Shawarma',
//     'Baba Ganoush',
//     'Manakish',
//     'Cuscuz',
//     'Kafta',
//     'Baklava'
//   ]
// }

const AEP: { [key: string]: string[] } = {
  bebidas: [
    'Caipirinha',
    'Cerveja',
    'Vinho Tinto',
    'Whisky',
    'Coca-Cola',
    'Pepsi',
    'Fanta Laranja',
    'Água Mineral',
    'Suco de Laranja',
    'Suco de Uva'
  ]
}

function geradorDeRestaurante(quantidade: number): RestaurantClass[] {
  const novoArray: RestaurantClass[] = []
  for (let x = 0; x < quantidade; x++) {
    const novoNome = `${ASub[Math.floor(Math.random() * ASub.length)]} ${
      AAdj[Math.floor(Math.random() * AAdj.length)]
    }`
    const news = RNew[Math.floor(Math.random() * RNew.length)]
    const stylesArray = Object.keys(AEP)
    const style = stylesArray[Math.floor(Math.random() * stylesArray.length)]
    const score = `${(Math.random() * 5).toFixed(1)}`
    const description = 'essa uma descrição temporaria'
    const linkTitle = 'Saiba mais'
    const link = `/${x}`
    const food: FoodClass[] = []
    let count = 1000
    AEP[style].forEach((nome: string) => {
      food.push(geradorDeComida(count, nome, link))
      count++
    })

    novoArray.push(
      new RestaurantClass(
        x,
        'https://via.placeholder.com/600x600',
        novoNome,
        news,
        style,
        score,
        description,
        linkTitle,
        link,
        food
      )
    )
  }
  return novoArray
}

function geradorDeComida(id: number, Nome: string, link: string): FoodClass {
  const promo: number = Math.floor(Math.random() * 100)
  const price: string = (Math.random() * 15).toFixed(2)
  const food: FoodClass = new FoodClass(
    id,
    'https://via.placeholder.com/600x600', //`${link}/${id}`
    `${promo < 10 && promo > 5 ? promo + '%' : ''}`,
    '',
    Nome,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maiores? Tempore quae deleniti expedita corrupti rerum, veritatis dolorum aliquid consequuntur ea consequatur reprehenderit vel nisi voluptatibus, voluptate, fugit esse rem?',
    price,
    `individual`,
    `${link}/${id}`
  )
  return food
}

export default geradorDeRestaurante
