import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  font: 900 2rem Raleway, sans-serif;
  color: #000;
  padding: 1rem;
  border: 4px solid #a5c9f7;
  border-radius: 25px;
  text-decoration: none;

  &:hover {
	  background-color: #a5c9f7;
	}
`;
