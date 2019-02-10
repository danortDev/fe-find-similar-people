import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  margin: '2px',
  padding: '6px 10px',
  color: `${getColor('WHITE')}`,
  background: `${getColor('PRIMARY').darken(10)}`
});

export const Name = styled('span', {
  fontSize: '0.8em'
});

export const Recommendations = styled('div', {
  borderRadius: '50%',
  fontWeight: 'bold',
  marginLeft: '4px',
  padding: '4px',
  fontSize: '0.8em',
  height: '10px',
  width: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: `${getColor('PRIMARY').darken(10)}`,
  background: `${getColor('WHITE')}`
});
