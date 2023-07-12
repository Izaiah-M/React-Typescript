type PropTypes = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropTypes) => {
  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>View products</button>
  ) : (
    <button onClick={() => setViewCart(true)}>View cart</button>
  );

  const content = <nav>{button}</nav>;

  return content;
};

export default Nav;
