import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from '@phosphor-icons/react'
import ImgIntro from '../../assets/imgIntro.svg'
import {
  CardContainer,
  CardProductsContainer,
  IntroContainer,
  IntroInfo,
  IntroInfoItens,
  ListCardsContainer,
  TagCardContainer,
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

export function Home() {
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
          <CardContainer>
            <img src={ImgExpressoTradicional} />
            <TagCardContainer>
              <div>Tradicional</div>
            </TagCardContainer>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgExpressoAmericano} />
            <TagCardContainer>
              <div>Tradicional</div>
            </TagCardContainer>
            <h2>Expresso Americano</h2>
            <p>Expresso diluído, menos intenso que o tradicional</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgExpressoCremoso} />
            <TagCardContainer>
              <div>Tradicional</div>
            </TagCardContainer>
            <h2>Expresso Cremoso</h2>
            <p>Café expresso tradicional com espuma cremosa</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgExpressoGelado} />
            <TagCardContainer>
              <div>Tradicional</div>
              <div>Gelado</div>
            </TagCardContainer>
            <h2>Expresso Gelado</h2>
            <p>Bebida preparada com café expresso e cubos de gelo</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgExpressoLeite} />
            <TagCardContainer>
              <div>Tradicional</div>
              <div>Com Leite</div>
            </TagCardContainer>
            <h2>Expresso Com Leite</h2>
            <p>Meio a meio de expresso tradicional com leite vaporizado</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgLatte} />
            <TagCardContainer>
              <div>Tradicional</div>
              <div>Com Leite</div>
            </TagCardContainer>
            <h2>Latte</h2>
            <p>
              Uma dose de café expresso com o dobro de leite e espuma cremosa
            </p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgCapuccino} />
            <TagCardContainer>
              <div>Tradicional</div>
              <div>Com Leite</div>
            </TagCardContainer>
            <h2>Capuccino</h2>
            <p>
              Bebida com canela feita de doses iguais de café, leite e espuma
            </p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgMacchiato} />
            <TagCardContainer>
              <div>Tradicional</div>
              <div>Com Leite</div>
            </TagCardContainer>
            <h2>Macchiato</h2>
            <p>Café expresso misturado com um pouco de leite quente e espuma</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgMocaccino} />
            <TagCardContainer>
              <div>Tradicional</div>
              <div>Com Leite</div>
            </TagCardContainer>
            <h2>Mocaccino</h2>
            <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgExpressoTradicional} />
            <TagCardContainer>
              <div>Tradicional</div>
            </TagCardContainer>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgExpressoTradicional} />
            <TagCardContainer>
              <div>Tradicional</div>
            </TagCardContainer>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgExpressoTradicional} />
            <TagCardContainer>
              <div>Tradicional</div>
            </TagCardContainer>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgExpressoTradicional} />
            <TagCardContainer>
              <div>Tradicional</div>
            </TagCardContainer>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer>
            <img src={ImgExpressoTradicional} />
            <TagCardContainer>
              <div>Tradicional</div>
            </TagCardContainer>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="CardPrice">
              <p>
                <span>R$</span> 9,90
              </p>

              <div className="CardShop">
                <div className="shoppingQuantity">
                  <Minus size={14} color="red" /> 1
                  <Plus size={14} color="Blue" />
                </div>
                <div className="shopping">
                  <ShoppingCart size={22} weight="fill" color="#fff" />
                </div>
              </div>
            </div>
          </CardContainer>
        </ListCardsContainer>
      </CardProductsContainer>
    </>
  )
}
