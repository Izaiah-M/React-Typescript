import Home from "./components/Home";
import "./App.css";
import { useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

const App = () => {
  const [viewCart, setViewCart] = useState(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Home viewCart={viewCart} setViewCart={setViewCart} />

      {pageContent}

      <Footer viewCart={viewCart} />
    </>
  );

  return content;
};

export default App;
