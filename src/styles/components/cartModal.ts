import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog"

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)'
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  height: '100vh',
  width: '30rem',
  padding: '4.5rem 3rem 3rem 3rem',
  background: 'var(--grayscale-elements, #202024)',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',

  h2: {
    color: '$gray100',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '160%',
    marginBottom: '2rem'
  },

  footer: {
    table: {
      width: '100%',      
      borderCollapse: 'collapse',
      tr: {
        marginBottom: '0.44rem',
        'td:first-child': {        
          textAlign: 'left',
        },
        'td:last-child': {        
          textAlign: 'right'
        }
      },
      'tr:nth-child(1)': {
        td: {
          color: '$gray100',
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '160%'
        }
      },
      'tr:nth-child(2)': {
        'td:first-child': {
          color: '$gray100',
          fontSize: '1.125rem',
          fontWeight: '700',
          lineHeight: '160%'
        },
        'td:last-child': {
          color: '$gray100',
          fontSize: '1.5rem',
          fontWeight: '700',
          lineHeight: '160%'
        }
      }
    },
    button: {
      marginTop: '3.56rem',
      backgroundColor: '$green500',
      color: '$gray100',
      borderRadius: 8,
      display: 'block',
      padding: '1.25rem 2rem',
      width: '100%',
      textAlign: 'center',
      border: 0,
      fontSize: '1.125rem',
      fontWeight: '700',
      lineHeight: '160%',
      cursor: 'pointer',
      transition: '200ms',
      '&:hover': {
        backgroundColor: '$green300'
      }
    }
  }
})

export const Close = styled(Dialog.Close, {
  lineHeight: 0,
  border: 0,
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 24,
  right: 24,
  cursor: 'pointer',
  color: '$gray400',

  '&:hover': {
    svg: {
      transition: '200ms',
      fill: '$green500'
    }
  }
})

export const Item = styled('div', {
  display: 'flex',
  gap: '1.25rem',  
  position: 'relative',
  marginBottom: '1.45rem',

  '.cover': {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }, 

  '.info': {
    width: '100%',
  },

  h3: {
    fontSize: '1.125rem',
    fontWeight: 400,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    span: {
      fontSize: '0.875rem',
      color: '#00b37e',
      marginTop: 0,
      marginBottom: 0
    }
  },

  span: {
    display: 'block',
    color: '$gray100',
    fontSize: '1.125rem',
    fontWeight: '700',
    lineHeight: '160%',
    marginTop: 2,
    marginBottom: 8
  },

  button: {
    marginTop: 'auto',
    position: 'absolute',
    bottom: 0,
    color: '$green500',
    fontSize: '1rem',
    fontWeight: '700',
    backgroundColor: 'transparent',
    border: 0,
    transition: '200ms',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const CartEmpty = styled('div', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  span: {
    maxWidth: 340,
    fontSize: '$md',
  }
})