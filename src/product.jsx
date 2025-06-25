import "./product.css";
function Product({ name, discription, BtnName, image, websitelink, vitamins }) {
  console.log(name);
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
      <a href={websitelink} target="_blank">
        <button>{BtnName}</button>
      </a>
    </div>
  );
}

export default Product;
