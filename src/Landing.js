import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Header, Paragraph, CtaButton } from './SharedBlocks';
import { UPLOAD_STEP } from './stepTypes';
import exampleFrame1 from './assets/example-frame-1.png';
import exampleFrame2 from './assets/example-frame-2.png';
import exampleFrame3 from './assets/example-frame-3.png';
import exampleFrame4 from './assets/example-frame-4.png';
import exampleFrame5 from './assets/example-frame-5.png';
import exampleFrame6 from './assets/example-frame-6.png';

const entrance = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 687px;
  padding: 24px;

  opacity: 0;
  animation: ${entrance} 1s 0.5s forwards;

  ${Header} {
    margin-bottom: 12px;
  }

  ${Paragraph} {
    margin-bottom: 36px;
  }

  @media (min-width: 768px) {
    margin-left: 10%;
  }
`;

const CtaRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FramesRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  margin-left: 48px;
`;

const rollIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-100px);
  }

  100% {
    opacity: 1;
    transform: translate(0px);
  }
`;

const Frame = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-left: -24px;

  opacity: 0;
  transform: translate(-100px);

  animation: ${rollIn} 1s ${({ index }) => 1 + (index * 0.25)}s forwards;

  &:nth-child(1n+5) {
    display: none;
  }

  @media (min-width: 414px) {
    &:nth-child(1n+5) {
      display: block;
    }
  }
`;

export default function Landing(props) {
  const { setNextStep } = props;

  return (
    <Container>
      <Header>
        Make your own Warnock profile frame
      </Header>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
      </Paragraph>
      <CtaRow>
        <CtaButton onClick={() => setNextStep(UPLOAD_STEP)}>Get Started</CtaButton>
        <FramesRow>
          {[
            exampleFrame1,
            exampleFrame2,
            exampleFrame3,
            exampleFrame4,
            exampleFrame5,
            exampleFrame6,
          ].map((src, index) => (
            <Frame key={index} index={index} src={src} />
          ))}
        </FramesRow>
      </CtaRow>
    </Container>
  );
}
