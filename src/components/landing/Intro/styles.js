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
    z-index: 0;
  }
  &.rightGallery {
    justify-content: flex-end;
    align-self: flex-start;
    z-index: 1;
    margin-right: 20px;
    margin-top: 20px;
  }
  &.leftGallery {
    justify-content: flex-start;
    align-self: flex-end;
    z-index: 2;
    margin-left: 20px;
    margin-top: 20px;
  }

  img {
    overflow: hidden;
    cursor: default;
    transition: all 0.4s ease-in-out;

    &.welcome {
      height: 50%;
      width: 50%;
    }

    &.floor {
      height: 15%;
      width: 15%;
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom: 50px;

      &:hover {
        height: 20%;
        width: 20%;
      }
    }

    &.abc {
      height: 45%;
      width: 45%;

      &:hover {
        height: 55%;
        width: 55%;
      }
    }

    &.bookshelf {
      height: 70%;
      width: 70%;
      padding-right: 40px;

      &:hover {
        height: 80%;
        width: 80%;
      }
    }

    &.math {
      height: 35%;
      width: 35%;
      padding-right: 100px;

      &:hover {
        height: 45%;
        width: 45%;
      }
    }

    &.flag {
      height: 25%;
      width: 25%;

      &:hover {
        height: 35%;
        width: 35%;
      }
    }

    &.ww {
      height: 25%;
      width: 25%;
      margin-top: 150px;

      &:hover {
        height: 35%;
        width: 35%;
      }
    }
  }
`;