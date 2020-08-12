import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Background = styled.div`
  z-index: 1;
`;

export const Wrapper = styled.div`
  background-color: '#fff';
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

export const Wall = styled.div`
  margin-top: 4rem;
  display: flex;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #A5C9F7;
  min-height: 300px;
  max-height: 300px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Floor = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${overlayIllustration});
  background-size: contain;
  min-height: 300px;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;


export const Gallery = styled.div`
  display: flex;    
  flex: 1;
  
  &.centerGallery {
    justify-content: center;
    align-items: flex-bottom;
  }

  img {
    overflow: hidden;
    cursor: default;
    transition: all 0.4s ease-in-out;

    &.center {
      height: 15%;
      width: 15%;
    }

    &:hover {
      height: 15%;
      width: 15%;
    }
  }
`;