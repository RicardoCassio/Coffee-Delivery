import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;

  background-color: ${(props) => props.theme['base-background']};
`

export const HeaderLocalizationAndPurchase = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const HeaderLocalization = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  height: 2.375rem;

  border-radius: 6px;

  padding: 8px;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  font-size: 0.875;
  font-family: Roboto;
`

export const HeaderPurchase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.375rem;
  width: 2.375rem;

  border-radius: 6px;

  padding: 8px;

  background-color: ${(props) => props.theme['yellow-light']};
`
