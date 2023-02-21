import * as React from 'react';

type SectionWrapperProps = Pick<
  SectionProps,
  'type' | 'id' | 'className' | 'children'
>;

function SectionWrapper({
  type,
  id,
  className,
  children,
}: SectionWrapperProps) {
  const props = {
    id,
    className,
  };

  if (type === 'nav') {
    return <nav {...props}>{children}</nav>;
  }

  if (type === 'footer') {
    return <footer {...props}>{children}</footer>;
  }

  return <section {...props}>{children}</section>;
}

interface SectionProps {
  type?: 'nav' | 'footer';
  id?: string;
  className?: string;
  containerclassName?: string;
  title?: string;
  subTitle?: string;
  titleClassName?: string;
  children: React.ReactNode;
}

export default function Section({
  type,
  id,
  className,
  containerclassName,
  title,
  subTitle,
  titleClassName,
  children,
}: SectionProps) {
  return (
    <SectionWrapper type={type} id={id} className={className}>
      <div className={`container ${containerclassName || ''}`}>
        {title ? (
          <h2
            className={`section-title text-center ${
              titleClassName || ''
            } md:text-left`}
          >
            {title}
          </h2>
        ) : null}
        {subTitle ? (
          <p
            className={`section-title text-center ${
              titleClassName || ''
            } md:text-left`}
          >
            {subTitle}
          </p>
        ) : null}
        {children}
      </div>
    </SectionWrapper>
  );
}
