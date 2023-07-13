import { ReactElement, useEffect } from "react";
import { fetchItems, selectAllItems } from "../features/ItemsSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Item, selectCartItems } from "../features/CartSlice";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const data: Item[] = useAppSelector(selectAllItems);
  const cartItems: Item[] = useAppSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  let pageContent: ReactElement | ReactElement[] = <p>loading...</p>;

  if (data?.length) {
    pageContent = data.map((product, key) => {
      const incart: boolean[] = cartItems.map(
        (cartitem) => cartitem.id === product.id
      );

      return <Product key={key} product={product} incart={incart} />;
    });
  }

  const content = <main>{pageContent}</main>;

  return content;
};

export default ProductList;
