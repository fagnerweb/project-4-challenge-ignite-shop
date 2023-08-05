import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4,
    marginTop: '2rem'
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    
    '&:hover': {
      color: '$green300'
    }
  }
})

export const BoxImages = styled('div', {
  marginTop: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const ImageContainer = styled('div', {
  width: 130,
  height: 135,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 999,
  padding: '0.25rem',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& + &': {
    marginLeft: '-3.3rem',
    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)'
  },

  img: {
    objectFit: 'cover'
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 999,
    position: 'absolute',
    bottom: -12,
    fontSize: '0.75rem',
    background: '$green300',
    color: '$white'

  }
})