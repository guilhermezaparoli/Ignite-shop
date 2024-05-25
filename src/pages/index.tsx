import {
  ContainerIconGreen,
  HomeContainer,
  Product,
} from '../styles/pages/home';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { stripe } from '../lib/stripe';
import { GetStaticProps } from 'next';
import Stripe from 'stripe';
import Link from 'next/link';
import Head from 'next/head';
import BagIconCart from '../assets/images/icon-bag-white.svg';
import { useContext } from 'react';
import { ItemsCartContext } from '../contexts/itemsCartContext';


interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    idPrice: string
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.6,
      spacing: 48,
    },
    rubberband: false,
    breakpoints: {
      '(max-width: 1366px)': {
        slides: {
          perView: 2.1,
          spacing: 24,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1.3,
          spacing: 16,
        },
      },
    },
  })
  const { addItemCart } = useContext(ItemsCartContext);
 

  return (
    <>
      <Head>
        <title>Home - Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} alt="" width={520} height={480} />
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <ContainerIconGreen onClick={() => addItemCart(product)}>
                  <Image src={BagIconCart} alt="icon-cart" />
                </ContainerIconGreen>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    console.log(product)
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      idPrice: price.id
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
