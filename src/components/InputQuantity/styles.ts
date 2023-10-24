import { styled } from 'styled-components'

export const ShoppingQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.375rem;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['base-button']};

  padding: 0 8px;

  border-radius: 6px;
`
