import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import logoImg from '../assets/logo.svg';
import {
  AmountItensCart,
  BoxHeader,
  Container,
  ContainerCartIcon,
  ContainerImage,
  ContainerItems,
  ContentPopup,
  EmptyCart,
  FooterPopup,
  Header,
  IconWrapper,
  Item,
  QuantityInputContainer,
  StyledPopup,
  WrapperInputAndButton,
} from '../styles/pages/app';
import Image from 'next/image';
import BagCartIcon from '../assets/images/icon-bag.svg';
import IconX from '../assets/images/x-icon.svg';
import { useContext, useState } from 'react';
import {
  ItemsCartContext,
  ItemsCartProvider,
} from '../contexts/itemsCartContext';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { Minus, Plus } from 'phosphor-react';

globalStyles();

interface ItemsCartContent {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
  idPrice: string;
  newId: string;
  quantity: number;
}

function CustomApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const { itemsCart, removeItemCart, handleAmountItemCart } =
    useContext(ItemsCartContext);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
    const [totalItensCart, setTotalItensCart] = useState(0)



  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post(`/api/checkout`, {
        pricesIds: itemsCart.map((item) => {
          return {
            price: item.idPrice,
            quantity: item.quantity,
          };
        }),
      });
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
    }
  }

  function onIncrease(item: ItemsCartContent) {
    handleAmountItemCart(item.quantity + 1, item.id);
  }

  function onDecrease(item: ItemsCartContent) {
    if (item.quantity > 1) {
      handleAmountItemCart(item.quantity - 1, item.id);
    }
  }

  return (
    <Container>
      <Header>
        <BoxHeader>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>

          <ContainerCartIcon onClick={() => setIsOpen(true)}>
            <AmountItensCart>
              <p>{itemsCart?.length}</p>
            </AmountItensCart>
            <Image src={BagCartIcon} alt="" />
          </ContainerCartIcon>

          <StyledPopup
            modal
            nested
            closeOnEscape
            open={isOpen}
            onClose={closeModal}
            position={'right center'}
          >
            {
              <ContentPopup>
                <div>
                  <ContainerImage>
                    <Image src={IconX} alt="" onClick={closeModal} />
                  </ContainerImage>
                  <h1>Carrinho de compras</h1>

                  {itemsCart.length > 0 && (
                    <ContainerItems>
                      {itemsCart.map((item) => (
                        <Item key={item.id}>
                          <div>
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div>
                            <p>{item.name}</p>
                            <strong>{item.price}</strong>
                            <WrapperInputAndButton>
                              <QuantityInputContainer>
                                <IconWrapper
                                  disabled={item.quantity <= 1}
                                  onClick={() => onDecrease(item)}
                                >
                                  <Minus size={18} weight="fill" />
                                </IconWrapper>
                                <input
                                  type="number"
                                  readOnly
                                  value={item.quantity}
                                />
                                <IconWrapper onClick={() => onIncrease(item)}>
                                  <Plus size={18} weight="fill" />
                                </IconWrapper>
                              </QuantityInputContainer>
                              <a onClick={() => removeItemCart(item.id)}>
                                Remover
                              </a>
                            </WrapperInputAndButton>
                          </div>
                        </Item>
                      ))}
                    </ContainerItems>
                  )}
                </div>

                {itemsCart.length == 0 && (
                  <EmptyCart>
                    <h1>O carrinho de compras está vazio!</h1>
                  </EmptyCart>
                )}
                <FooterPopup>
                  <div>
                    <p>Quantidade</p>
                    <p>
                      {itemsCart.reduce((total, item) => total += item.quantity, 0)}
                      {itemsCart.reduce((total, item) => total += item.quantity, 0) === 1 ? ' item' : ' Itens'}
                    </p>
                  </div>
                  <div>
                    <strong>Valor total</strong>
                    <strong>
                      R${' '}
                      {itemsCart
                        .reduce(
                          (total, item) =>
                            total +
                            Number(
                              item.price.replace('R$', '').replace(',', '.')
                            ) * item.quantity,
                          0
                        )
                        .toFixed(2)
                        .replace('.', ',')}
                    </strong>
                  </div>

                  <button
                    disabled={
                      isCreatingCheckoutSession || itemsCart.length <= 0
                    }
                    onClick={() => {
                      closeModal();
                      handleBuyProduct();
                    }}
                  >
                    Finalizar compra
                  </button>
                </FooterPopup>
              </ContentPopup>
            }
          </StyledPopup>
        </BoxHeader>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ItemsCartProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <CustomApp Component={Component} pageProps={pageProps} router={router} />
    </ItemsCartProvider>
  );
}
