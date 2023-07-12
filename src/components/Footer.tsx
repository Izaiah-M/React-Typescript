import { useAppSelector } from "../app/hooks";
import { selectCartItems, selectTotalPrice } from "../features/CartSlice";

type PropTypes = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropTypes) => {
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping cart &copy; {year}</p>
  ) : (
    <>
      <p>Total items: {cartItems.length}</p>
      <p>Total price: ${totalPrice}</p>
      <p>Shopping cart: &copy; {year}</p>
    </>
  );

  const content = <footer>{pageContent}</footer>;

  return content;
};

export default Footer;
