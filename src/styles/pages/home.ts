import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex', 
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  height: 600,
})
export const Product = styled('article', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: "hidden",
  minWidth: 540,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    cursor: 'pointer',
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    color: '$gray100',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {
      width: 56,
      height: 56,
      borderRadius: 6,
      backgroundColor: '$green500',
      border: 'none',
      lineHeight: 0,
      cursor: 'pointer',
      transition: '200ms',

      '&:hover': {
        backgroundColor: '$green300'
      }
    },

    backgroundColor: 'rgba(0,0,0,0.6)',    

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    }
  },

  '.info': {
    span: {
      marginTop: '4px',
      display: 'block'
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})