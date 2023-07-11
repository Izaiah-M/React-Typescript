import { ReactNode } from "react";

// An example of a generic component in react with Typescript

interface ListProps<T> {
  items: T[]; // meaning the items are going to be an array of type "T"
  render: (item: T) => ReactNode; // An anonymous function that will help render whatever
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <div>
      <ul>
        {items.map((item, i) => {
          return <li key={i}>{render(item)}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
