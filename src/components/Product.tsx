import { ReactElement } from "react";
import { Item, addItemToCart } from "../features/CartSlice";
import { useAppDispatch } from "../app/hooks";

type PropTypes = {
  product: Item;
  incart: boolean;
};

const Product = ({ product, incart }: PropTypes): ReactElement => {
  const dispatch = useAppDispatch();

  const img: string = new URL(`./images/${product.name}.jpg`, import.meta.url)
    .href;

  const onAddToCart = () => dispatch(addItemToCart(product));

  const itemInCart = incart ? "--> Item in Cart: 🤙" : null;

  const content = (
    <article>
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} style={{ width: "500px" }} />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );

  return content;
};

export default Product;
