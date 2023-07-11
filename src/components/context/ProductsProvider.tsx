import { ReactElement, createContext, useEffect, useState } from "react";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const initialState: ProductType[] = [];

/* if you're to deploy, go for this...*/
// const initialState: ProductType[] = [
//   {
//     id: "p001",
//     name: "Yellow yoghurt",
//     description: "A smooth, creamy yellow dairy product.",
//     price: 4.99,
//   },
//   {
//     id: "p002",
//     name: "Cheesy Tats",
//     description: "A Crispy treat",
//     price: 5.99,
//   },
//   {
//     id: "p003",
//     name: "Water",
//     description: "Nice sparkling water",
//     price: 1.78,
//   },
// ];

export type useProductsContextType = { products: ProductType[] };

const initContextState: useProductsContextType = { products: [] };

const ProductsContext = createContext<useProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initialState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:4000/products") // run this command to create a server for your json file "npx json-server -w data/products.json -p 4000" where 4000 is the port and data/products.json is the path
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });

      return data;
    };

    fetchProducts().then((prdcts) => setProducts(prdcts));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
