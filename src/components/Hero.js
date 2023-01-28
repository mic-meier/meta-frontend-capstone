import RestaurantFood from "../assets/restaurantfood.jpg";

export default function Hero() {
  return (
    <div className="hero-bg">
      <div className="hero-container">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sapiente ducimus nobis unde fugit pariatur illum eius...
          </p>
        </div>
        <div className="heroimg-container">
          <img
            className="hero-image"
            src={RestaurantFood}
            alt="Plate with food"
          />
        </div>
      </div>
    </div>
  );
}
