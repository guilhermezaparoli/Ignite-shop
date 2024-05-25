import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../lib/stripe';

export default async function handler(req, res) {
  console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);
  console.log('Next URL:', process.env.NEXT_URL);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { pricesIds } = req.body;

  if (!pricesIds || !Array.isArray(pricesIds)) {
    return res.status(400).json({ error: 'Price not found or invalid format.' });
  }

  try {
    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    // Correctly map pricesIds to line_items
    const lineItems = pricesIds.map(item => ({
      price: item.price,
      quantity: item.quantity,
    }));

    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items: lineItems,
    });

    return res.status(201).json({ checkoutUrl: checkoutSession.url });
  } catch (error) {
    console.error('Stripe API Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
