import React from 'react';
import {Container, Content} from './styles';

type Props = {
  children: React.ReactNode;
  background?: any;
  idSection: string;
};

export function Section({children, background, idSection}: Props) {
  return (
    <Container className={background} id={idSection}>
      <Content>{children}</Content>
    </Container>
  );
}
