import styled from 'styled-components'

export const Container = styled.div`
  font-size: 50px;
  font-family: 'Nova Square';
  padding: 0.2rem 0.5rem;
  border: 5px solid #333;
  color: #333;
  border-radius: 10px;

  .separator {
    display: inline-block;
    transform: translateY(-5px);
    font-size: 60px;
  }

  input {
    color: #333;
    font-size: 50px;
    font-family: 'Nova Square';
    border: none;
    display: inline-block;
    max-width: 69px;
    text-align: center;

    &::-webkit-inner-spin-button {
        display: none;
    }
  }
`