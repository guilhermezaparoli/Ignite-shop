import Popup from "reactjs-popup";
import { styled } from "..";

export const Container = styled("div", {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight:"100vh"
})

export const Header = styled("header", {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: "0 auto"
})

export const BoxHeader = styled("div", {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  
})

export const ContainerCartIcon = styled("div", {
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
    }
})


export const AmountItensCart = styled("div", {
    width: 24,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    border: '3px solid $gray900',
    backgroundColor: "$green500",

    position: 'absolute',
    top: -8,
    right: -8
})

export const StyledPopup = styled(Popup, {

   '&-content': {
    backgroundColor: 'red',
    height: '100%',
    padding: '3rem',
    position: 'absolute',
}
})


export const ContentPopup = styled('div', {
})