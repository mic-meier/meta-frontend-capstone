import RestaurantFood from '../assets/restaurantfood.jpg'
import Button from './Button'

export default function Hero() {
  return (
    <div className="bg-green">
      <div className="mx-auto flex justify-between px-4 py-12 lg:max-w-screen-lg lg:pb-0">
        <div>
          <h1 className="font-leading text-3xl font-semibold text-yellow lg:text-6xl">
            Little Lemon
          </h1>
          <h2 className="font-leading text-xl font-medium text-grey lg:text-4xl">
            Chicago
          </h2>
          <p className="my-6 max-w-sm pr-14 font-paragraph text-sm font-normal text-grey lg:my-20 lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, nihil magnam, et unde quod assumenda dicta similique
            ipsum eveniet, harum error!
          </p>
          <Button variant="primary">Reserve a Table</Button>
        </div>
        <div className="heroimg-container">
          <img
            className="-mb-12 mt-8 w-64 rounded-md lg:w-96"
            src={RestaurantFood}
            alt="Plate with food"
          />
        </div>
      </div>
    </div>
  )
}
