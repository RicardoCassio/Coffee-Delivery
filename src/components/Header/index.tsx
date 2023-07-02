import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.png'
import {
  HeaderContainer,
  HeaderLocalization,
  HeaderLocalizationAndPurchase,
  HeaderPurchase,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <HeaderLocalizationAndPurchase>
        <HeaderLocalization>
          <MapPin size={25} weight="fill" color="#8047F8" />
          <p>Caculé, BA</p>
        </HeaderLocalization>
        <HeaderPurchase>
          <ShoppingCart size={30} weight="fill" color="#C47F17" />
        </HeaderPurchase>
      </HeaderLocalizationAndPurchase>
    </HeaderContainer>
  )
}
