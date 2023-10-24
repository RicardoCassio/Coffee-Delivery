import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  margin-top: 2.5rem;

  h1 {
    font-size: 1.15rem;
    font-family: 'Baloo 2';
    margin-bottom: 0.937rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  input {
    background: ${(props) => props.theme['base-input']};
  }
`

export const CheckoutContainerEnderacoAndPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CheckoutFormContainer = styled.div`
  width: 40rem;
  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  border-radius: 6px;

  .InfoTitleFormContainer {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    margin-bottom: 2rem;
  }

  .InfoTitleForm {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-family: Roboto;
  }

  .InfoSubtitleForm {
    color: ${(props) => props.theme['base-text']};
    font-size: 0%.875;
    font-family: Roboto;
  }
`

export const CheckoutCafesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 28rem;
  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  border-radius: 6px 44px;

  button {
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;

    border-radius: 6px;
    background: ${(props) => props.theme.yellow};

    color: ${(props) => props.theme.white};

    font-size: 0.875rem;
    font-family: Roboto;
    font-weight: 700;
  }
`

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }

  .InfoActionCoffeeCard {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  .CoffeeCardTitle {
    display: flex;
    justify-content: space-between;
  }

  .CoffeCardTitleNameCoffee {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-family: Roboto;
  }

  .CoffeCardValueCoffee {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-family: Roboto;
    font-weight: 700;
  }

  .CoffeeCardItem {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }

  .CoffeeCardItem > button {
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0 8px;
    gap: 0.25rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    color: ${(props) => props.theme['base-text']};
    /* Components/Button S */
    font-size: 0.875rem;
    font-family: Roboto;
    font-weight: 400;
    line-height: 160%;
  }
`
export const CoffeeCardResumeOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .CoffeeCardResumeTitleKey {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    font-family: Roboto;
  }

  .CoffeeCardResumeTitleValue {
    font-size: 1rem;
  }

  .CoffeeCardResumeValueTotal {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-family: Roboto;
    font-weight: 700;
  }
`
