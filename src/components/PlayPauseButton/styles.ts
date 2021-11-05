import styled from 'styled-components'

export const Button = styled.button`
  background-color: #333;
  border: 0;
  color: #FFF;
  border-radius: 10px;
  width: 100%;
  padding: 1rem;
  font-size: 25px;
  font-family: 'Nova Square';
  font-weight: bold;
  letter-spacing: 5px;
  margin-top: 2rem;
  text-transform: uppercase;
  cursor: pointer;

  &:active {
    background-color: #222;
  }
`