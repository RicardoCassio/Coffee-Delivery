import { styled } from 'styled-components'

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
