import React from 'react';
import styled, { css } from 'styled-components';
import StepLayout from './StepLayout';
import { CtaButton } from './SharedBlocks';
import frames from './frames';
import { SHARE_STEP } from './stepTypes';

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 24px;
`;

const ItemContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 0 0 calc(50% - 12px);
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 12px;

  padding: 6px;

  background-color: var(--white);
  border-radius: 4px;
  border: 2px solid var(--white);
  box-shadow: none;

  &:hover {
    background-color: var(--light-gray);
  }

  ${({ isHighlighted }) => isHighlighted && css`
    border: 4px solid var(--moderate-blue);
  `}

  img {
    display: block;
    width: 100%;
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    flex: 0 0 calc(33.33% - 24px);
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const ItemLabel = styled.p`
  font-family: var(--sans-serif);
  font-size: 18px;
  font-weight: 900;
  line-height: 1.4;
  color: var(--moderate-blue);
`;

export default function Framer(props) {
  const { setNextStep, frame, setFrame } = props;

  return (
    <StepLayout
      stepNumber="2"
      header="Select your frame"
      subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    >
      <Gallery>
        {frames.map(([src, title]) => (
          <ItemContainer
            key={src}
            aria-label={`Select ${title}`}
            isHighlighted={frame === src}
            onClick={() => setFrame(src)}
          >
            <img alt={title} src={src} />
            <ItemLabel>{title}</ItemLabel>
          </ItemContainer>
        ))}
      </Gallery>
      {!!frame && (
        <div>
          <CtaButton onClick={() => setNextStep(SHARE_STEP)}>
            Next
          </CtaButton>
        </div>
      )}
    </StepLayout>
  );
}
