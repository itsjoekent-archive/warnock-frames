import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 24px;

  @media (min-width: 768px) {
    margin-bottom: 96px;
  }
`;

const LogoWrapper = styled.a`
  text-decoration: none;
`;

const LogoImage = styled.img`
  display: block;
  width: 140px;
`;

export default function Logo() {
  return (
    <Container>
      <LogoWrapper href="/">
        <LogoImage src={logo} />
      </LogoWrapper>
    </Container>
  );
}
