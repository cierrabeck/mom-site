import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from './node_modules/providers/ThemeProvider';
import { Header, Footer } from './node_modules/components/theme';
import { Container, Button } from './node_modules/components/common';
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
