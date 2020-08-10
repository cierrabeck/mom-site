import styled from 'styled-components';

export const Background = styled.div`
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
`;

export const Wrapper = styled.div`
  background-color: '#fff';
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

export const IntroWrapper = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  h1 {
    font-family: 'Merriweather', serif;
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    text-decoration: underline;
    text-decoration-color: '#b02e0c';

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 20pt;
    }
  }

  h4 {
    font-weight: 100;
    font-style: italic;
    font-family: 'Merriweather', serif;
    margin-bottom: 0rem;
    font-size: 22pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
    margin-top: 1.45rem;
    align: right;
  }
`;

export const Gallery = styled.div`
  flex: 1;
  justify-content: center;
  padding-right: 0.75rem;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
    align-self: center;

    height: 100%;
    border-radius: 25%;
    background: #fff;
    overflow: hidden;
    position: relative;
    cursor: default;
    box-shadow: inset 0 0 0 24px #A5C9F7;
    transition: all 0.4s ease-in-out;

    &:hover {
      box-shadow: 
      inset 0 0 0 1px rgba(255,255,255,0.1);
      transform: scale(1);
      opacity: 1;
    }
  }
`;