import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectCartItems, submit } from "../features/CartSlice";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);

  const onSubmitOrder = () => {
    dispatch(submit());
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thank you for your fake order statement</h2>
  ) : (
    <>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, key) => {
          return (
            <li key={key}>
              Name: {item.name}, Quantity: {item.qty}
            </li>
          );
        })}
      </ul>
    </>
  );

  return <div></div>;
};

export default Cart;
