import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  background-color: var(--orange);
  padding: 6px;
`;

const Type = styled.a`
  font-family: var(--serif);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.5px;
  color: var(--white);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export default function AlertBar(props) {
  const { link, children } = props;

  return (
    <Container>
      <Type href={link}>{children}</Type>
    </Container>
  );
}
