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
import { useState } from 'react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <Container>
        <Header>
          <BoxHeader>
            <Image src={logoImg} alt="" />

            <ContainerCartIcon onClick={() => setIsOpen(true)}>
              <AmountItensCart>
                <p>1</p>
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
                      <Item>
                        <div>Imagem</div>
                        <div>
                          <p>Camiseta Beyond the Limits</p>
                          <strong>R$ 79,90</strong>
                          <a>Remover</a>
                        </div>
                      </Item>
                      <Item>
                        <div>Imagem</div>
                        <div>
                          <p>Camiseta Beyond the Limits</p>
                          <strong>R$ 79,90</strong>
                          <a>Remover</a>
                        </div>
                      </Item>
                    </ContainerItems>
                  </div>

                  <FooterPopup>
                    <div>
                      <p>Quantidade</p>
                      <p>3 itens</p>
                    </div>
                    <div>
                      <strong>Valor total</strong>
                      <strong>R$ 270,00</strong>
                    </div>

                    <button
                      onClick={() => {
                        closeModal();
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
    </>
  );
}
