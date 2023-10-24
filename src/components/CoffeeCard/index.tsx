import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { CardContainer, TagCardContainer } from './styles'
import { useState } from 'react'

interface Coffee {
  coffeeId: number
  coffeeImage: string
  coffeeName: string
  coffeeDescription: string
  coffeePrice: string
  coffeeTags: string[]
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState([])

  function HandleAddQuantityCoffee(coffeeID) {
    // const newCoffee = { coffeeID, '2' }
    // setCoffeeQuantity([...coffeeQuantity, newCoffee])
  }

  return (
    <>
      <CardContainer>
        <img src={coffee.coffeeImage} />
        <TagCardContainer>
          {coffee.coffeeTags.map((tag: any, index: any) => (
            <div key={index}>{tag}</div>
          ))}
        </TagCardContainer>
        <h2>{coffee.coffeeName}</h2>
        <p>{coffee.coffeeDescription}</p>
        <div className="CardPrice">
          <p>
            <span>R$</span> {coffee.coffeePrice}
          </p>

          <div className="CardShop">
            <div className="shoppingQuantity">
              <button>
                <Minus size={14} color="red" />{' '}
              </button>
              1
              <button onClick={HandleAddQuantityCoffee(coffee.coffeeId)}>
                <Plus size={14} color="Blue" />
              </button>
            </div>
            <div className="shopping">
              <ShoppingCart size={22} weight="fill" color="#fff" />
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  )
}
