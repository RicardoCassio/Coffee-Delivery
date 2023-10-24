import { styled } from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  padding: 5.875rem 10rem;

  background-color: ${(props) => props.theme['base-background']};
`

export const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;

  width: 36.75rem;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    font-family: Roboto;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IntroInfoItens = styled.div`
  width: 37.5rem;
  margin-top: 4.125rem;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
    grid-gap: 10px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border-radius: 50px;
  }

  .shoppingCart {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  .package {
    background-color: ${(props) => props.theme['base-text']};
  }

  .timer {
    background-color: ${(props) => props.theme.yellow};
  }

  .coffee {
    background-color: ${(props) => props.theme.purple};
  }
`

export const CardProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 10rem 5.875rem 10rem;

  h1 {
    margin-right: 58rem;
    margin-top: 1rem;
    margin-bottom: 3.375rem;

    color: ${(props) => props.theme['base-subtitle']};

    font-size: 2rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`

export const ListCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  width: 70rem;

  align-items: center;
  justify-content: flex-start;
`
