import Link from 'next/link';
import {  Images, ImagesContainer, SuccessContainer } from '../styles/pages/success';
import { GetServerSideProps } from 'next';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import Image from 'next/image';
import Head from 'next/head';

interface successProps {
  customerName: string;
  images: {
    dataProduct: {
      id: string;
      images: string[];
    };
  }[];
}
export default function Success({ customerName, images }: successProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada - Ignite Shop</title>
      </Head>

      <meta name="robots" content="noindex" />
      <SuccessContainer>
      <div style={{overflow: 'auto'}}>
        <ImagesContainer>
          {images.map((item) => (
            <Images key={item.dataProduct.id}>
            <Image
              src={item.dataProduct.images[0]}
              alt=""
              width={120}
              height={110}
            />
            </Images>

          ))}
        </ImagesContainer>
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de
          <strong> {images.length} camisetas</strong> logo estará a caminho da
          sua casa.
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
  const customerName = session.customer_details.name;
  const images = session.line_items.data.map((shirt) => {
    return {
      dataProduct: shirt.price.product,
    };
  });

  return {
    props: {
      customerName,
      images,
    },
  };
};
