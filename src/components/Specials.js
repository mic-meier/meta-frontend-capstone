import Bruschetta from '../assets/bruschetta.jpeg'
import GreekSalad from '../assets/greek_salad.jpg'
import LemonDessert from '../assets/lemon_dessert.jpg'
import Button from './Button'
import Dish from './Dish'

const specials = [
  {
    name: 'Greek Salad',
    price: '12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    imgSrc: GreekSalad,
  },
  {
    name: 'Bruschetta',
    price: '5.99',
    description:
      'Our bruschetta is made from grilled bread that has been seasoned with salt and olive oil.',
    imgSrc: Bruschetta,
  },
  {
    name: 'Lemon Dessert',
    price: '5.00',
    description: `This comes straight from grandma's recipe book, every last ingredient has been locally sourced and is as authentic as can be imagined.`,
    imgSrc: LemonDessert,
  },
]

export default function Specials() {
  return (
    <div className="mx-auto my-24 px-4 lg:max-w-screen-lg">
      <div className="my-10 flex justify-between">
        <h4 className="font-leading text-2xl font-bold text-black">Specials</h4>
        <Button variant="primary">Order Online</Button>
      </div>
      <div className="flex flex-wrap justify-between">
        {specials.map((special) => (
          <Dish
            name={special.name}
            price={special.price}
            description={special.description}
            imgSrc={special.imgSrc}
          />
        ))}
      </div>
    </div>
  )
}
