import { useAppSelector } from "../app/hooks";
import Nav from "./Nav";
import { selectCartItems, selectTotalPrice } from "../features/CartSlice";

type PropTypes = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = ({ viewCart, setViewCart }: PropTypes) => {
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const content = (
    <>
      <header>
        <div>
          <h1>Company Name co.</h1>

          <div>
            <p>Total Items: {cartItems.length}</p>
            <p>Total Price: ${totalPrice}</p>
          </div>
        </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </header>
    </>
  );

  return content;
};

export default Home;
