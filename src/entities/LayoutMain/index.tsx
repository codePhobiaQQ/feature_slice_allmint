import React from 'react';

interface Props {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default LayoutMain;
