import { Minus, Plus } from '@phosphor-icons/react'
import { ShoppingQuantity } from './styles'

export function InputQuantity() {
  return (
    <>
      <ShoppingQuantity>
        <Minus size={14} color="red" /> 1
        <Plus size={14} color="Blue" />
      </ShoppingQuantity>
    </>
  )
}
