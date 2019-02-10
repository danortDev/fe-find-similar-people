import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '4px',
  margin: '4px',
  padding: '10px 20px',
  color: `${getColor('WHITE')}`,
  background: `${getColor('PRIMARY').darken(10)}`
});

export const Name = styled('span', {
  fontSize: '1em',
  fontWeight: 'bold',
  marginBottom: '4px'
});

export const Title = styled('div', {
  borderRadius: '50%',
  fontSize: '0.8em',
  color: `${getColor('WHITE')}`,
});
