import Popup from 'reactjs-popup';
import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
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
    backgroundColor: '$gray800',
    height: '100%',
    padding: '3rem',
    marginRight: '0 !important',
  },
});

export const ContentPopup = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '90vh',

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
    alignItems:'center',
    justifyContent: 'flex-end',

    img: {
        cursor: 'pointer',
        transition: 'filter 0.3s',

        '&:hover': {
            filter: 'brightness(1.2)'
        }
    }

})

export const ContainerItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
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
      cursor: "not-allowed"
    }
  },
});
