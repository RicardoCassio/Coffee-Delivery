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

export const TagCardContainer = styled.div`
  display: flex;
  gap: 0.3rem;

  div {
    /* Components/Tag */
    font-size: 0.875rem;
    font-family: Roboto;
    font-weight: 700;
    line-height: 130%;
    padding: 4px 8px;

    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    position: relative;
    top: -25px;

    width: 7.5rem;
    height: 7.5rem;
  }

  h2 {
    font-size: 20px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.875rem;
  }

  p {
    color: var(--base-label, #8d8686);
    text-align: center;
    /* Text/Regular S */
    font-size: 14px;
    font-family: Roboto;
    font-weight: 400;
    line-height: 130%;
  }

  .CardPrice {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 13rem;
    margin-top: 2.1rem;
  }

  .CardPrice > p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2';
    font-size: 1.7rem;
    font-weight: bolder;
  }

  .CardPrice > p > span {
    font-family: Roboto;
    font-size: 1rem;
  }

  .CardShop {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }

  .shoppingQuantity {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.375rem;
    gap: 0.5rem;

    background-color: ${(props) => props.theme['base-button']};

    padding: 0 8px;

    border-radius: 6px;
  }

  .shopping {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme['purple-dark']};
    width: 2.375rem;
    height: 2.375rem;

    border-radius: 6px;
  }
`
