import Link from 'next/link';
import {
  Images,
  ImagesContainer,
  SuccessContainer,
} from '../styles/pages/success';
import { GetServerSideProps } from 'next';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import Image from 'next/image';
import Head from 'next/head';
import { useContext } from 'react';
import { ItemsCartContext } from '../contexts/itemsCartContext';

interface successProps {
  customerName: string;
  product: {
    id: string;
    quantity: number;
    price: {
      product: {
        images: string[];
      };
    };
  }[];
}
export default function Success({
  customerName,
  product,
}: successProps) {
  const totalShirts = product.reduce(
    (total, cur) => (total += cur.quantity),
    0
  );
  return (
    <>
      <Head>
        <title>Compra efetuada - Ignite Shop</title>
      </Head>

      <meta name="robots" content="noindex" />
      <SuccessContainer>
        <div style={{ overflow: 'auto' }}>
          <ImagesContainer>
            {product.map((item) => {
              const images = [];
              for (let i = 0; i < item.quantity; i++) {
                images.push(
                  <Images key={`${item.id}-${i}`}>
                    <Image
                      src={item.price.product.images[0]}
                      alt=""
                      width={120}
                      height={110}
                    />
                  </Images>
                );
              }
              return images;
            })}
          </ImagesContainer>
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName.split(/\s+/)[0]}</strong>, sua compra de
          <strong> {totalShirts} camisetas</strong> logo estará a caminho da sua
          casa.
        </p>

        <Link href="/">Voltar ao catágolo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const product = session.line_items.data;
  const customerName = session.customer_details.name;

  return {
    props: {
      customerName,
      product,
    },
  };
};
