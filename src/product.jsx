import "./product.css";
function Product({
  name,
  discription,
  BtnName,
  image,
  websitelink,
  vitamins,
  price,
}) {
  console.log(name);
  let isDiscount =
    price >= 400 ? (
      <p className="discount">Discount is 5% </p>
    ) : (
      <a href="#">GET DISCOUNT</a>
    );
  return (
    <div className="product">
      <img src={image} alt="missing" />
      <h3>{name}</h3>
      <p>
        <b>DISCRIPTION</b> <br />
        {discription}
      </p>
      <p>
        <b>VITAMINS</b> <br /> {vitamins}
      </p>
      <p>{isDiscount}</p>
      <a href={websitelink} target="_blank">
        <button>{BtnName}</button>
      </a>
    </div>
  );
}

export default Product;
