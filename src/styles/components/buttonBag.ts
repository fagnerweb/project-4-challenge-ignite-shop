import { styled } from "@stitches/react";

export const ButtonContainer = styled('div', {
  variants: {
    size: {
      small: {
        fontSize: '0.75rem',
      },
      large: {
        fontSize: '0.875rem',
      }
    }
  },
  backgroundColor: '$gray800',
  border: 'none',
  borderRadius: 6,
  width: 48,
  height: 48,
  cursor: 'pointer',
  transition: '200ms',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {    
    width: 24,
    height: 24,
    borderRadius: 9999,
    position: 'absolute',
    top: -12,
    right: -12,
    backgroundColor: '$green300',
    border: '3px solid $gray900',    
    color: '$white',
    fontWeight: 'bold',
    display: 'flex',
    fontSize: 'inherit',
    alignItems: 'center',
    justifyContent: 'center',

  },

  '&:hover': {
    'backgroundColor':'#4E4E5B'
  }
})