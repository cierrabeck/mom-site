import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header, Footer } from 'components/theme';
import { Container, Button } from 'components/common';
import image from 'assets/illustrations/image.png';
import { Wrapper, Background, IntroWrapper, Details, Thumbnail} from './styles';

export const Gallery = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Wrapper theme={theme}>
      <Header />
      <Details theme={theme} as={Container}>
        {/* <h2> friends </h2> */}
        </Details>
      <IntroWrapper as={Container}>
      </IntroWrapper>
      <Footer />
    </Wrapper>
  </Background>

  );
};
