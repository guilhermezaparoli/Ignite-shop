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
  FooterPopup,
  Header,
  Item,
  StyledPopup,
} from '../styles/pages/app';
import Image from 'next/image';
import BagCartIcon from '../assets/images/icon-bag.svg';
import IconX from '../assets/images/x-icon.svg';
import { useContext, useState } from 'react';
import { ItemsCartContext, ItemsCartProvider } from '../contexts/itemsCartContext';
import Link from 'next/link';

globalStyles();

function CustomApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const { itemsCart, removeItemCart } = useContext(ItemsCartContext);

  console.log(itemsCart, 'itemsCart');
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
                  <h1>Sacola de compras</h1>

                  <ContainerItems>
                    {itemsCart.map(item => (
                      <Item key={item.id}>
                        <div>
                          <Image src={item.imageUrl} alt={item.name} width={100} height={100} />
                        </div>
                        <div>
                          <p>{item.name}</p>
                          <strong>{item.price}</strong>
                          <a onClick={() => removeItemCart(item.id)}>Remover</a>
                        </div>
                      </Item>
                    ))}
                  </ContainerItems>
                </div>

                <FooterPopup>
                  <div>
                    <p>Quantidade</p>
                    <p>{itemsCart.length} itens</p>
                  </div>
                  <div>
                    <strong>Valor total</strong>
                    <strong>R$ {itemsCart.reduce((total, item) => total + parseFloat(item.price.replace('R$', '').replace(',', '.')), 0).toFixed(2)}</strong>
                  </div>

                  <button onClick={closeModal}>
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
      <CustomApp Component={Component} pageProps={pageProps} router={router} />
    </ItemsCartProvider>
  );
}
