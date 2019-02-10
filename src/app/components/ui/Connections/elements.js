import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('div', {
  margin: '40px 0',
  padding: '20px 40px',
});

export const Items = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-end',
  maxWidth: '800px',
  marginTop: '10px'
});

export const Title = styled('h4', {
  fontSize: '1.4em',
  fontWeight: 'bold',
  textAlign: 'center',
  color: `${getColor('PRIMARY')}`
});
