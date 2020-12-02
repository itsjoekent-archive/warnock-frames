import styled from 'styled-components';

export const Header = styled.h1`
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--white);

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Paragraph = styled.p`
  font-family: var(--serif);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--white);
`;

export const CtaButton = styled.button`
  display: block;
  font-family: var(--sans-serif);
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 1px;
  color: var(--white);
  border: none;
  border-radius: 4px;
  text-decoration: none;
  background-color: var(--orange);
  cursor: pointer;
  padding: 12px 24px;

  z-index: 1;

  &:hover {
    background-color: var(--dark-orange);
  }
`;

export const SecondaryCtaButton = styled.button`
  display: block;
  font-family: var(--sans-serif);
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 1px;
  color: var(--white);
  border: none;
  border-radius: 4px;
  text-decoration: none;
  background-color: var(--moderate-blue);
  cursor: pointer;
  padding: 6px 12px;

  z-index: 1;

  &:hover {
    background-color: var(--dark-moderate-blue);
  }
`;
