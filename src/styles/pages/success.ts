import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  '@bp1': {
    height: '100%',
    width: '100%',
    // padding: '0 1rem'
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray100',

    '@bp1': {
      fontSize: '$xl',
      marginTop: '1rem',
    },
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,

    '@bp1': {
      fontSize: '$md',
      padding: '0 1rem',
    },
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    textDecoration: 'none',
    fontSize: '$lg',
    color: '$green500',
    transition: '0.3s',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },

    '@bp1': {
      fontSize: '$md',
    },
  },
});
export const Images = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});

export const ImagesContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3rem',

  'div + div': {
    marginLeft: 'calc(-100px / 2)',
  },
  '@bp1': {
    maxWidth: '100vw',
  },
});
