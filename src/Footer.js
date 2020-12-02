import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 24px;
`;

const Disclaimer = styled.p`
  font-family: var(--serif);
  font-size: 12px;
  font-weight: normal;
  color: var(--white);

  padding: 6px 18px;
  border: 1px solid var(--white);
`;

export default function Footer() {
  return (
    <Container>
      <Disclaimer>
        Paid for by Warnock for Georgia
      </Disclaimer>
    </Container>
  );
}
