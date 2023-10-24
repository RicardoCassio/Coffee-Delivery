import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import {
  CheckoutCafesContainer,
  CheckoutContainer,
  CheckoutContainerEnderacoAndPayment,
  CheckoutFormContainer,
  CoffeeCardContainer,
  CoffeeCardResumeOrder,
} from './styles'

import ImgExpressoTradicional from '../../assets/coffes/expresso-Tradicional.svg'
import ImgLatte from '../../assets/coffes/latte.svg'
import { InputQuantity } from '../../components/InputQuantity'

export function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <CheckoutContainerEnderacoAndPayment>
          <h1>Complete seu pedido</h1>
          <CheckoutFormContainer>
            <div className="InfoTitleFormContainer">
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <p className="InfoTitleForm">Endereço de Entrega</p>
                <p className="InfoSubtitleForm">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
            <form>
              <Grid container spacing={2} color="#EDEDED">
                <Grid item xs={4}>
                  <TextField label="CEP" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Rua" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Número" fullWidth />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    label="Complemento"
                    helperText="Opcional"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Bairro" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Cidade" fullWidth />
                </Grid>
                <Grid item xs={2}>
                  <TextField label="UF" fullWidth />
                </Grid>
              </Grid>
            </form>
          </CheckoutFormContainer>

          <CheckoutFormContainer>
            <div className="InfoTitleFormContainer">
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <p className="InfoTitleForm">Pagamento</p>
                <p className="InfoSubtitleForm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <form>
              <Grid container spacing={2} color="#EDEDED">
                <Grid item xs={4}>
                  <TextField
                    label="CARTÃO DE CRÉDITO"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <CreditCard color="#8047F8" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="CARTÃO DE DÉBITO"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <Bank color="#8047F8" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="DINHEIRO"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <Money color="#8047F8" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </CheckoutFormContainer>
        </CheckoutContainerEnderacoAndPayment>
        <div>
          <h1>Cafés selecionados</h1>
          <CheckoutCafesContainer>
            <CoffeeCardContainer>
              <img src={ImgExpressoTradicional} />
              <div className="InfoActionCoffeeCard">
                <div className="CoffeeCardTitle">
                  <p className="CoffeCardTitleNameCoffee">
                    Expresso Tradicional
                  </p>
                  <p className="CoffeCardValueCoffee">R$ 9,90</p>
                </div>
                <div className="CoffeeCardItem">
                  <InputQuantity />
                  <button>
                    <Trash size={18} color="#8047F8" />
                    REMOVER
                  </button>
                </div>
              </div>
            </CoffeeCardContainer>

            <CoffeeCardContainer>
              <img src={ImgLatte} />
              <div className="InfoActionCoffeeCard">
                <div className="CoffeeCardTitle">
                  <p className="CoffeCardTitleNameCoffee">Latte</p>
                  <p className="CoffeCardValueCoffee">R$ 9,90</p>
                </div>
                <div className="CoffeeCardItem">
                  <InputQuantity />
                  <button>
                    <Trash size={18} color="#8047F8" />
                    REMOVER
                  </button>
                </div>
              </div>
            </CoffeeCardContainer>

            <CoffeeCardResumeOrder>
              <div>
                <p className="CoffeeCardResumeTitleKey">Total dos itens</p>
                <p className="CoffeeCardResumeTitleValue">R$ 19,80</p>
              </div>
              <div>
                <p className="CoffeeCardResumeTitleKey">Entrega</p>
                <p className="CoffeeCardResumeTitleValue">R$ 3,50</p>
              </div>
              <div>
                <p className="CoffeeCardResumeValueTotal">Total</p>
                <p className="CoffeeCardResumeValueTotal">R$ 33,20</p>
              </div>
            </CoffeeCardResumeOrder>

            <button>CONFIRMAR PEDIDO</button>
          </CheckoutCafesContainer>
        </div>
      </CheckoutContainer>
    </>
  )
}
