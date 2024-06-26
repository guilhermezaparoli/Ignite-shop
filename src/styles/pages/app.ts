import Popup from 'reactjs-popup';
import { styled } from '..';
import { keyframes } from '@stitches/react';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@bp1': {
    gap: 30,
  },
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
});

export const BoxHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
});

export const ContainerCartIcon = styled('div', {
  alignItems: 'center',
  borderRadius: 6,
  backgroundColor: '$gray700',
  width: 48,
  height: 48,
  position: 'relative',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',

  p: {
    color: '$white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
});

export const AmountItensCart = styled('div', {
  width: 24,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 999,
  border: '3px solid $gray900',
  backgroundColor: '$green500',

  position: 'absolute',
  top: -8,
  right: -8,
});

export const StyledPopup = styled(Popup, {
  '&-content': {
    backgroundColor: '$gray700',
    height: '100%',
    padding: '3rem',
    marginRight: '0 !important',

    '@bp1': {
      padding: '0.5rem 2rem',
      width: '100%',
    },
  },
});

export const ContentPopup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '90vh',
  minWidth: 400,
  '@bp1': {
    minWidth: '100%',
  },

  h1: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    lineHeight: 1.6,
    marginTop: 24,
    marginBottom: 32,
  },
});

export const ContainerImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  img: {
    cursor: 'pointer',
    transition: 'filter 0.3s',

    '&:hover': {
      filter: 'brightness(1.2)',
    },
  },
});

export const ContainerItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  maxHeight: '50vh',
  overflow: 'auto',
});

export const Item = styled('div', {
  display: 'flex',
  gap: 20,

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

    p: {
      fontSize: '1.125rem',
      lineHeigth: 1.6,
    },
    strong: {
      fontSize: '1.125rem',
      fontWeigth: 'bold',
      lineHeigth: 1.6,
    },
    a: {
      textDecorationm: 'none',
      cursor: 'pointer',
      color: '$green500',
      fontWeight: 'bold',
      transition: 'color 0.3s',

      '&:hover': {
        color: '$green300',
      },
    },
  },
});

export const FooterPopup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  div: {
    display: 'flex',
    justifyContent: 'space-between',

    strong: {
      fontSize: '1.125rem',
    },
  },

  button: {
    marginTop: 40,
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
  },
});

export const EmptyCart = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const QuantityInputContainer = styled('div', {
  flex: 1,
  backgroundColor: '$gray700',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.25rem',
  borderRadius: 6,
  padding: '0.5rem',
  flexDirection: 'row !important',
  maxWidth: 75,

  input: {
    textAlign: 'center',
    width: '100%',
    background: 'none',
    border: 'none',
    color: '$gray100',
    fontSize: 16,

    '&:focus': {
      outline: 'none',
    },
  },

  /* REMOVENDO ESPAÇO DE SETAS DO INPUT DE NUMBER */
  'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button':
    {
      '-webkit-appearance': 'none',
      margin: 0,
    },

  'input[type="number"]': {
    '-moz-appearance': 'textfield',
  },
});

export const IconWrapper = styled('button', {
  width: '0.875rem',
  height: '0.875rem',
  border: 'none',
  background: 'none',
  color: '$green500',
  transition: '0.4s',

  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    color: '$green300',
  },

  svg: {
    cursor: 'pointer',
  },
});

export const WrapperInputAndButton = styled('div', {
  display: 'flex',
  flexDirection: 'row !important',
  alignItems: 'center',
  gap: '2rem !important',

  '@bp1': {
    flexDirection: 'column !important',
    alignItems: 'start',
    gap: '0.5rem !important',
  },
});

const rotate = keyframes({
  to: { transform: 'rotate(1turn)' },
});

export const WrapperLoader = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0,0,0,0.7)',
  height: '100%',
  width: '100%',
  zIndex: 9999999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Loader = styled('div', {
  width: '75px',
  padding: '8px',
  aspectRatio: 1,
  borderRadius: '50%',
  background: '#25b09b',
  '--_m': `
    conic-gradient(#0000 10%, #000),
    linear-gradient(#000 0 0) content-box
  `,
  '-webkit-mask': 'var(--_m)',
  mask: 'var(--_m)',
  '-webkit-mask-composite': 'source-out',
  'mask-composite': 'subtract',
  animation: `${rotate} 1s infinite linear`,
});
