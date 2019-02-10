import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Overlay = styled('div', {
  minHeight: 'calc(100vh - 64px)',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: `${getColor('BLACK').setAlpha(.8)}`,
  zIndex: 100
});

export const SpinnerWrapepr = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
