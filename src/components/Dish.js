export default function Dish({ imgSrc, name, price, description }) {
  return (
    <div className="mx-auto mb-8 w-72 rounded-md bg-grey p-4 shadow-md">
      <img src={imgSrc} alt={name} className="mx-auto mb-8 w-64" />
      <div className="mb-4 flex justify-between">
        <h6 className="font-leading text-lg font-semibold text-black">
          {name}
        </h6>
        <p>
          <span className="font-leading text-lg font-semibold text-black">
            $ {price}
          </span>
        </p>
      </div>
      <p className="font-paragraph text-black">{description}</p>
    </div>
  )
}
