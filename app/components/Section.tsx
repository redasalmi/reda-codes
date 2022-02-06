import * as React from 'react';

interface SectionProps {
  type?: 'nav' | 'footer';
  id?: string;
  className?: string;
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
}

export default function Section({
  type,
  id,
  className,
  title,
  subTitle,
  children,
}: SectionProps) {
  const props = {
    id,
    className,
  };

  let sectionEle = <section></section>;
  if (type === 'nav') {
    sectionEle = <nav></nav>;
  }
  if (type === 'footer') {
    sectionEle = <footer></footer>;
  }

  return (
    <sectionEle.type {...props}>
      <div className="container">
        {title ? <h2 className="section-title">{title}</h2> : null}
        {subTitle ? <p className="section-title">{subTitle}</p> : null}
        {children}
      </div>
    </sectionEle.type>
  );
}
