import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import welcome from 'assets/illustrations/welcome.png';
import { Wrapper, Background, Wall, Floor, Gallery} from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Wrapper theme={theme}>
      <Header />
      <Wall as={Container}>
        <Gallery className="centerGallery">
        <img className="center" src={welcome} alt="Welcome" />
        </Gallery>
      </Wall>
      <Floor as={Container}>
        </Floor>
      <Footer />
    </Wrapper>
  </Background>

  );
};
