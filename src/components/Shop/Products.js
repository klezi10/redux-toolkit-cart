import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "b1",
    title: "My first product",
    price: 10,
    description: "This is my first product",
  },
  {
    id: "b2",
    title: "My second product",
    price: 15,
    description: "This is my second product",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
