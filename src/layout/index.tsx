import React from 'react';

import { Container } from './styles';

type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
