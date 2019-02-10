import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: `${getColor('WHITE')}`,
  background: `${getColor('PRIMARY')}`,
  marginTop: '20px',
  border: 'none',
  borderRadius: '2px',
  padding: '10px 20px',
  boxShadow: `0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12)`,
  ':disabled': {
    color: `${getColor('GREY').darken(30)}`,
    background: `${getColor('GREY')}`,
  }
});
