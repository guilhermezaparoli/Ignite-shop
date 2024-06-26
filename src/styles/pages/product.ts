import { styled } from '..';

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',

  '@bp1': {
    gridTemplateColumns: '1fr',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '0 2rem',
    gap: '2rem',
  },
});
export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25erem',
  height: 656,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  objectFit: 'cover',

  '@bp1': {
    height: '100%',
    width: '100%',
    img: {
      height: '100%',
      width: '100%',
    },
  },
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',

    '@bp1': {
      fontSize: '$xl',
    },
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$gray300',

    '@bp1': {
      fontSize: '$xl',
    },
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',

    '@bp1': {
      fontSize: '$sm',
      marginTop: '2rem',
    },
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '@bp1': {
      fontSize: '$sm',
      margin: '2rem 0',
    },
  },
});
