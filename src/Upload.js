import React from 'react';
import styled from 'styled-components';
import StepLayout from './StepLayout';
import { CtaButton, SecondaryCtaButton } from './SharedBlocks'
import { FRAME_STEP } from './stepTypes';
import defaultProfile from './assets/default-profile.png';

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 192px;
  padding: 12px;

  background-color: var(--white);
  border-radius: 4px;

  img {
    margin-bottom: 12px;
  }
`;

const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${UploadContainer} {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;

    ${UploadContainer} {
      margin-right: 12px;
      margin-bottom: 0;
    }

    ${CtaButton} {
      margin-left: 12px;
    }
  }
`;

const HiddenInput = styled.input`
  visibility: hidden;
`;

export default function Upload(props) {
  const { setNextStep, profilePhoto, setProfilePhoto } = props;

  const fileRef = React.useRef(null);

  function onUpload(event) {
    const fileReader = new FileReader();

    fileReader.onload = function () {
      setProfilePhoto(fileReader.result);
    }

    fileReader.readAsDataURL(event.target.files[0]);
  }

  return (
    <StepLayout
      stepNumber="1"
      header="Upload your profile photo"
      subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    >
      <InnerLayout>
        <UploadContainer>
          <img alt="Upload preview" src={profilePhoto || defaultProfile} width="112px" height="112px" />
          <SecondaryCtaButton onClick={() => fileRef.current.click()}>
            Upload
          </SecondaryCtaButton>
        </UploadContainer>
        {!!profilePhoto && (
          <CtaButton onClick={() => setNextStep(FRAME_STEP)}>
            Next
          </CtaButton>
        )}
      </InnerLayout>
      <HiddenInput ref={fileRef} type="file" accept="image/png, image/jpeg" onChange={onUpload} />
    </StepLayout>
  );
}
