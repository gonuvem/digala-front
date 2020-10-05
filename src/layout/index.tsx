import React from 'react';

import { Container } from './styles';

type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

const Layout: React.FC<LayoutProps> = ({ children, onClick }) => (
  <Container onClick={onClick}>{children}</Container>
);

export default Layout;
