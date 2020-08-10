import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import image from 'assets/illustrations/image.png';
import school_1 from 'assets/illustrations/school_1.png'
import school_2 from 'assets/illustrations/school_2.png'
import school_3 from 'assets/illustrations/school_3.png'
import { Wrapper, Background, IntroWrapper, Details, Thumbnail, Gallery} from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Wrapper theme={theme}>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi boys and girls!</h1>
          <h4> In addition to our Google Classroom, I will be sharing games and activities here for us to use during the online school year! </h4>
        </Details>
        <Thumbnail theme={theme}>
          <img src={image} align='right' alt="Cierra" />
        </Thumbnail>
      </IntroWrapper>
      <IntroWrapper as={Container}>
      <Gallery>
          <img src={school_1} align='center' alt="1" />
        </Gallery>
        <Gallery>
          <img src={school_2} align='center' alt="2" />
        </Gallery>
        <Gallery>
          <img src={school_3} align='center' alt="3" />
        </Gallery>
        </IntroWrapper>
      <Footer />
    </Wrapper>
  </Background>

  );
};
