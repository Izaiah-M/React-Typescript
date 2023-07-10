import { ReactNode } from "react";

type SectionProps = {
  title?: string; // question mark makes it optional
  children: ReactNode; // react Node is any type, so string, int, reactfragment..hover to see more
  number: number;
};

const Section = ({
  title = "Default title if not provided",
  number,
  children,
}: SectionProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{number}</p>
      <div>{children}</div>
    </div>
  );
};

export default Section;
