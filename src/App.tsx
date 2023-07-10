import Counter from "./components/Counter";
import Hello from "./components/Hello";
import List from "./components/List";
import Section from "./components/Section";

function App() {
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
