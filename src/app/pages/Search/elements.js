import { styled } from 'styletron-react';
import getColor from 'app/palette';


export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '80px'
});

export const Note = styled('h1', {
  fontSize: '1em',
  marginTop: '60px',
  textAlign: 'center',
  color: `${getColor('GREY').darken(20)}`
});

export const Title = styled('h1', {
  fontSize: '1.6em',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: `${getColor('PRIMARY')}`
});
