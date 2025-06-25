import Product from "./product.jsx";
import "./product.css";
function ProductTab() {
  let vitamins = [
    "Vitamin C, Vitamin A Vitamin B6, Vitamin K, and Vitamin E",
    " vitamin C and B vitamins",
    " vitamin C, potassium, and vitamin K",
    "vitamin B6, vitamin C, and folate",
    "vitamin C and folate",
  ];
  return (
    <div className="productTab">
      <Product
        image="src/assets/mango.jpg"
        name="Mango"
        discription="mango is good for health"
        vitamins={vitamins[0]}
        BtnName="Click to Visit Mango"
        websitelink="https://www.health.com/nutrition/health-benefits-mango"
        price={420}
      />
      <Product
        image="src/assets/apple.jpg"
        name="Apple"
        discription="Apple is good for health"
        vitamins={vitamins[1]}
        BtnName="Click to Visit Apple"
        websitelink="https://www.health.com/medications-not-to-mix-apple-cider-vinegar-8762499"
        price={300}
      />
      <Product
        image="src/assets/cherry.jpg"
        name="cherry"
        discription="Cherry is good for health"
        vitamins={vitamins[2]}
        BtnName="Click to Visit Cherry"
        websitelink="https://www.health.com/tart-cherry-juice-benefits-8673562"
        price={450}
      />
      <Product
        image="src/assets/banana.jpg"
        name="Banana"
        discription="Banana is good for health"
        vitamins={vitamins[3]}
        BtnName="Click to Visit Banana"
        websitelink="https://www.health.com/ask-health-banana-before-workout-8620229"
        price={400}
      />
      <Product
        image="src/assets/orange.jpg"
        name="Orange"
        discription="Orange is good for health"
        vitamins={vitamins[4]}
        BtnName="Click to Visit Orange"
        websitelink="https://www.webmd.com/food-recipes/health-benefits-oranges"
        price={200}
      />
    </div>
  );
}

export default ProductTab;
