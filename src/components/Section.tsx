import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title: string;
}

const Section = ({ children, title }: SectionProps): React.ReactNode => {
  return (
    <>
      <h2 id={title.toLowerCase()} className="inter-bold text-5xl text-white">
        {title}
      </h2>
      {children}
    </>
  );
};

export default Section;
