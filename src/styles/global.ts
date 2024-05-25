import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray500',
  },
  '::-webkit-scrollbar': {
    backgroundColor: '$gray100',
    borderRadius: 50,
    width: 5,

    '@bp1': {
      height: 5,
    },
  },
});
