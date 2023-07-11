import { useState } from "react";
import Counter from "./components/testcomponents/Counter";
import Hello from "./components/testcomponents/Hello";
import List from "./components/testcomponents/List";
import Section from "./components/testcomponents/Section";

interface User {
  id: number;
  name: string;
}

type functionTest = (n: string) => string;

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User[] | null>(null);

  const myName: string = "Izaiah"; // Defining a string

  // Defining a function with a return type of Number
  const test: functionTest = (n) => {
    return n; // where n shall be a string.
  };

  return (
    <>
      <div>
        <Hello title="Yelele" />

        <Section number={1}>
          This is my Child
          <p>Child can also be a component mannnn</p>
        </Section>

        <Counter />

        <List
          items={["Yellow", "Orange", "Banana"]}
          render={(item: string) => <span>{item}</span>}
        />
      </div>
    </>
  );
}

export default App;
