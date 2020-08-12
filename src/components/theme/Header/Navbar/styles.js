import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.a`
--fill-color: #A5C9F7;
font: 900 3rem Raleway, sans-serif;
text-decoration: none;
--border-color: #000000;
-webkit-text-stroke: 2px var(--border-color);	
background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
color: transparent;
-webkit-background-clip: text;
background-clip: text;
transition: 0.5s linear;

position: relative;
display: block;

&:hover {
  background-size: 100%;
}
`;
