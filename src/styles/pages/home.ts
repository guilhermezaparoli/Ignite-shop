import { styled } from '..';

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  '@bp1': {
    // paddingLeft: '16px',
    minHeight: '100%',
  },
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 540,
  minHeight: 100,
  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    borderRadius: 6,
    padding: '1.25rem 2rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,

    backgroundColor: 'rgba(0, 0,6, 0.6)',

    '@bp1': {
      padding: '0.5rem 1.5rem',
      minHeight: 85

    },
    '@bp2': {
      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all 0.2s ease-out',
    },

    strong: {
      fontSize: '$lg',
      color: '$gray100',
      '@bp1': {
        fontSize: '$sm'
      }
    },

    span: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$green300',

      '@bp1': {
        fontSize: '$sm'
      }
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
});

export const ContainerIconGreen = styled('div', {
  padding: 12,
  borderRadius: 6,
  backgroundColor: '$green500',
  cursor: 'pointer',

  img: {
    color: '$white',
  },

  transition: '0.3s',

  '&:hover': {
    backgroundColor: '$green300',
  },
});
