import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  color: `${getColor('PRIMARY')}`,
  background: `${getColor('GREY')}`,
  boxShadow: `0 1px 3px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)`
});


export const Title = styled('h1', {
  fontSize: '1.2em'
});

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center'
});

export const Logo = styled('img', {
  height: '17px',
  width: 'auto'
});

export const Icon = styled('img', {
  maxHeight: '24px',
  width: 'auto',
  marginRight: '10px'
});
