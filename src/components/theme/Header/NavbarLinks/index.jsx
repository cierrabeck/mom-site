import React, { useContext } from 'react';
import { Link } from "gatsby"
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const NavbarLinks = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper desktop={'desktop'} theme={theme}>
      <Link to="/alphabet" href="#about"> Alphabet Letter Cards</Link>
      {/* <ToggleTheme /> */}
    </Wrapper>
  )
};

export default NavbarLinks;
