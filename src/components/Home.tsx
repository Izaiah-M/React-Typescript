import { useEffect } from "react";
import { fetchItems, selectAllItems } from "../features/ItemsSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(selectAllItems);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div>
      {data.map((item, key) => {
        return (
          <p style={{ color: "yellow" }} key={key}>
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default Home;
