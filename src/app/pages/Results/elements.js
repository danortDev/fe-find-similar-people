import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('div', {
  padding: '40px',
  position: 'relative'
});

export const ErrorTitle = styled('h1', {
  fontSize: '1.8em',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: `${getColor('GREY').darken(30)}`
});

export const ErrorMessage = styled('h2', {
  fontSize: '1.2em',
  fontWeight: 'bold',
  color: `${getColor('GREY').darken(10)}`
});

export const Error = styled('div', {
  display: 'flex',
  padding: '40px 0',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center'
});

export const ProfileWrapper = styled('div', {
  minHeight: 'calc(100vh - 64px)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px',
  background: `${getColor('PRIMARY').darken(30)}`,
});

export const Avatar = styled('img', {
  width: '150px',
  height: 'auto',
  borderRadius: '50%',
  border: `4px solid ${getColor('PRIMARY').darken(20)}`
});

export const Name = styled('h1', {
  fontSize: '1.8em',
  fontWeight: 'bold',
  marginTop: '10px',
  color: `${getColor('GREY').darken(30)}`
});

export const Ocupation = styled('h2', {
  fontSize: '1.2em',
  fontWeight: 'bold',
  marginTop: '5px',
  textAlign: 'center',
  maxWidth: '600px',
  color: `${getColor('GREY').darken(50)}`
});
