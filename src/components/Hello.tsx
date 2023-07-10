type HeadingProps = { title: string };

const Hello = ({ title }: HeadingProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Hello;
