import React from 'react';
import styled from 'styled-components';
import StepLayout from './StepLayout';
import frames from './frames';
import { CtaButton, TertiaryButton } from './SharedBlocks';
import { FRAME_STEP } from './stepTypes';

const InnerLayout = styled.div`
  img {
    margin-bottom: 24px;
  }

  ${CtaButton} {
    width: fit-content;
    margin-bottom: 24px;
  }
`;

export default function Share(props) {
  const { frame, profilePhoto, setNextStep } = props;

  const [dataUri, setDataUri] = React.useState(null);
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const [src, title, color, squareSrc] = frames.find(([src]) => src === frame);

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const profileImage = new Image();

    profileImage.onload = () => {
      ctx.drawImage(profileImage, 0, 0, profileImage.width, profileImage.height, 0, 0, canvas.width, canvas.height);

      const frameImage = new Image();
      frameImage.onload = () => {
        ctx.drawImage(frameImage, 0, 0, frameImage.width, frameImage.height, 0, 0, canvas.width, canvas.height);
        setDataUri(canvas.toDataURL());
      };

      frameImage.src = squareSrc;
    };

    profileImage.src = profilePhoto;
  }, [frame, profilePhoto, setDataUri]);

  return (
    <StepLayout
      stepNumber="3"
      header="Download & share!"
      subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <InnerLayout>
        <img src={dataUri} width="256" height="256" />
        <canvas ref={canvasRef} width="512" height="512" style={{ display: 'none' }} />
        <CtaButton as="a" href={dataUri} download>Download</CtaButton>
        <TertiaryButton onClick={() => setNextStep(FRAME_STEP)}>⟵ Go back</TertiaryButton>
      </InnerLayout>
    </StepLayout>
  );
}
