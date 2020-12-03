import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import AlertBar from './AlertBar';
import Logo from './Logo';
import Footer from './Footer';
import Landing from './Landing';
import Upload from './Upload';
import Framer from './Framer';
import Share from './Share';
import Switch from './Switch';
import {
  LANDING_STEP,
  UPLOAD_STEP,
  FRAME_STEP,
  SHARE_STEP,
} from './stepTypes';
import backgroundMobile from './assets/landing-mobile-bg.png';
import backgroundDesktop from './assets/landing-desktop-bg.png';

const shiftBackgroundImageMobile = keyframes`
  0% {
    background-position: top center;
  }

  100% {
    background-position: top 150vh center;
  }
`;

const shiftBackgroundImageDesktop = keyframes`
  0% {
    background-position: top right;
  }

  100% {
    background-position: top right -150vw;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  background-color: var(--dark-blue);

  ${({ step, nextStep }) => step === LANDING_STEP && css`
    background-image: url(${backgroundMobile});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;

    ${nextStep === UPLOAD_STEP && css`
      animation: ${shiftBackgroundImageMobile} 1.5s forwards;
    `}

    @media (min-width: 768px) {
      background-image: url(${backgroundDesktop});
      background-position: top right;

      ${nextStep === UPLOAD_STEP && css`
        animation: ${shiftBackgroundImageDesktop} 1.5s forwards;
      `}
    }
  `}
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
  position: relative;
`;

const fadeOut = keyframes`
  0% { opacity: 1 } 100% { opacity: 0 }
`;

const fadeIn = keyframes`
  0% { opacity: 0 } 100% { opacity: 1 }
`;

const Contents = styled.div`
  width: 100%;
  min-height: 100%;

  animation: ${({ nextStep }) => !!nextStep ? fadeOut : fadeIn} 1s forwards;
`;

function App() {
  const [step, setStep] = React.useState(LANDING_STEP);
  const [nextStep, setNextStep] = React.useState(null);

  const [profilePhoto, setProfilePhoto] = React.useState(null);
  const [frame, setFrame] = React.useState(null);

  React.useEffect(() => {
    if (!nextStep) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setStep(nextStep);
      setNextStep(null);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [
    step,
    setStep,
    nextStep,
    setNextStep,
  ]);

  return (
    <Page step={step} nextStep={nextStep}>
      <AlertBar link="https://warnockforgeorgia.com/take-action/">
        We are mobilizing our top supporters to take action wherever and whenever they can. Signup to join the team today!
      </AlertBar>
      <Main>
        <Logo />
        <Contents nextStep={nextStep}>
          <Switch conditional={({ targetStep }) => step === targetStep}>
            <Landing targetStep={LANDING_STEP} setNextStep={setNextStep} />
            <Upload
              targetStep={UPLOAD_STEP}
              setNextStep={setNextStep}
              profilePhoto={profilePhoto}
              setProfilePhoto={setProfilePhoto}
            />
            <Framer
              targetStep={FRAME_STEP}
              setNextStep={setNextStep}
              frame={frame}
              setFrame={setFrame}
            />
            <Share
              targetStep={SHARE_STEP}
              setNextStep={setNextStep}
              profilePhoto={profilePhoto}
              frame={frame}
            />
          </Switch>
        </Contents>
      </Main>
      <Footer />
    </Page>
  );
}

export default App;
