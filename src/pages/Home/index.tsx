import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import ImgIntro from '../../assets/imgIntro.svg'
import {
  CardProductsContainer,
  IntroContainer,
  IntroInfo,
  IntroInfoItens,
  ListCardsContainer,
} from './styles'

import ImgExpressoTradicional from '../../assets/coffes/expresso-Tradicional.svg'
import ImgExpressoAmericano from '../../assets/coffes/expresso-Americano.svg'
import ImgExpressoCremoso from '../../assets/coffes/expresso-cremoso.svg'
import ImgExpressoGelado from '../../assets/coffes/expresso-gelado.svg'
import ImgExpressoLeite from '../../assets/coffes/expresso-leite.svg'
import ImgLatte from '../../assets/coffes/latte.svg'
import ImgCapuccino from '../../assets/coffes/capuccino.svg'
import ImgMacchiato from '../../assets/coffes/macchiato.svg'
import ImgMocaccino from '../../assets/coffes/mocaccino.svg'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  const coffees = [
    {
      coffeeId: 1,
      coffeeImage: ImgExpressoTradicional,
      coffeeName: 'Expresso Tradicional',
      coffeeDescription:
        'O tradicional café feito com água quente e grãos moídos',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional'],
    },
    {
      coffeeId: 2,
      coffeeImage: ImgExpressoAmericano,
      coffeeName: 'Expresso Americano',
      coffeeDescription: 'Expresso diluído, menos intenso que o tradicional',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional'],
    },
    {
      coffeeId: 1,
      coffeeImage: ImgExpressoTradicional,
      coffeeName: 'Expresso Tradicional',
      coffeeDescription:
        'O tradicional café feito com água quente e grãos moídos',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional'],
    },
    {
      coffeeId: 3,
      coffeeImage: ImgExpressoCremoso,
      coffeeName: 'Expresso Cremoso',
      coffeeDescription: 'Café expresso tradicional com espuma cremosa',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional'],
    },
    {
      coffeeId: 4,
      coffeeImage: ImgExpressoGelado,
      coffeeName: 'Expresso Gelado',
      coffeeDescription: 'Bebida preparada com café expresso e cubos de gelo',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional', 'Gelado'],
    },
    {
      coffeeId: 5,
      coffeeImage: ImgExpressoLeite,
      coffeeName: 'Café com Leite',
      coffeeDescription:
        'Meio a meio de expresso tradicional com leite vaporizado',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional', 'Com Leite'],
    },
    {
      coffeeId: 6,
      coffeeImage: ImgLatte,
      coffeeName: 'Latte',
      coffeeDescription:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional', 'Com Leite'],
    },
    {
      coffeeId: 7,
      coffeeImage: ImgCapuccino,
      coffeeName: 'Capuccino',
      coffeeDescription:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional', 'Com Leite'],
    },
    {
      coffeeId: 8,
      coffeeImage: ImgMacchiato,
      coffeeName: 'Macchiato',
      coffeeDescription:
        'Café expresso misturado com um pouco de leite quente e espuma',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional', 'Com Leite'],
    },
    {
      coffeeId: 9,
      coffeeImage: ImgMocaccino,
      coffeeName: 'Mocaccino',
      coffeeDescription:
        'Café expresso com calda de chocolate, pouco leite e espuma',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional', 'Com Leite'],
    },
    {
      coffeeId: 8,
      coffeeImage: ImgMacchiato,
      coffeeName: 'Macchiato',
      coffeeDescription:
        'Café expresso misturado com um pouco de leite quente e espuma',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional', 'Com Leite'],
    },
    {
      coffeeId: 9,
      coffeeImage: ImgMocaccino,
      coffeeName: 'Mocaccino',
      coffeeDescription:
        'Café expresso com calda de chocolate, pouco leite e espuma',
      coffeePrice: '9,90',
      coffeeTags: ['Tradicional', 'Com Leite'],
    },
  ]
  return (
    <>
      <IntroContainer>
        <IntroInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <IntroInfoItens>
            <ul>
              <li>
                <div className="shoppingCart">
                  <ShoppingCart size={20} weight="fill" color="#fff" />
                </div>
                Compra simples e segura
              </li>
              <li>
                <div className="package">
                  <Package size={20} weight="fill" color="#fff" />
                </div>
                Embalagem mantém o café intacto
              </li>
              <li>
                <div className="timer">
                  <Timer size={20} weight="fill" color="#fff" />
                </div>
                Entrega rápida e rastreada
              </li>
              <li>
                <div className="coffee">
                  <Coffee size={20} weight="fill" color="#fff" />
                </div>
                O café chega fresquinho até você
              </li>
            </ul>
          </IntroInfoItens>
        </IntroInfo>
        <img src={ImgIntro} />
      </IntroContainer>

      <CardProductsContainer>
        <h1>Nossos Cafés</h1>

        <ListCardsContainer>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.coffeeId} coffee={coffee} />
          ))}
        </ListCardsContainer>
      </CardProductsContainer>
    </>
  )
}
