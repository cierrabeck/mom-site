import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import welcome from 'assets/illustrations/welcome.png';
import flag from 'assets/illustrations/flag.png';
import abc from 'assets/illustrations/abc.png';
import math from 'assets/illustrations/math.png';
import ww from 'assets/illustrations/ww.png';
import bookshelf from 'assets/illustrations/bookshelf.png';
import snack from 'assets/illustrations/snack.png';
import group from 'assets/illustrations/group.png';
import computer from 'assets/illustrations/computer.png';
import { Wrapper, Background, Wall, Floor, Gallery} from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Wrapper theme={theme}>
      <Header />
      <Wall as={Container}>
      <Gallery className="leftGallery">
        <img className="bookshelf" src={bookshelf} alt="ABC" />
        <img className="abc" src={abc} alt="ABC" />
        </Gallery>
        <Gallery className="centerGallery">
        <img className="welcome" src={welcome} alt="Welcome" />
        </Gallery>
        <Gallery className="rightGallery">
        <img className="math" src={math} alt="math" />
        <img className="ww" src={ww} alt="ww" />
        <img className="flag" src={flag} alt="flag" />
        </Gallery>
      </Wall>
      <Floor as={Container}>
        <Gallery className="centerGallery">
          <img className="floor" src={snack} alt="snack" />
          <img className="floor" src={group} alt="group" />
          <img className="floor" src={computer} alt="computer" />        
        </Gallery>
        </Floor>
      <Footer />
    </Wrapper>
  </Background>

  );
};
