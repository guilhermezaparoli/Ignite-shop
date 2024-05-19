import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import logoImg from '../assets/logo.svg';
import {
  AmountItensCart,
  BoxHeader,
  Container,
  ContainerCartIcon,
  ContentPopup,
  Header,
  StyledPopup,
} from '../styles/pages/app';
import Image from 'next/image';
import BagCartIcon from '../assets/images/icon-bag.svg';
import IconX from "../assets/images/x-icon.svg"

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header>
          <BoxHeader>
            <Image src={logoImg} alt="" />

            <StyledPopup
              trigger={
                <ContainerCartIcon>
                  <AmountItensCart>
                    <p>1</p>
                  </AmountItensCart>
                  <Image src={BagCartIcon} alt="" />
                </ContainerCartIcon>
              }
              modal
              // nested
              position={'right'}
              closeOnEscape
            >
              {(close) => (
                <ContentPopup>
                  <Image src={IconX} alt='' onClick={close}/>
                  <h1>Sacola de compras</h1>

                  <div>

                  </div>
                </ContentPopup>
              )}
            </StyledPopup>
          </BoxHeader>
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
