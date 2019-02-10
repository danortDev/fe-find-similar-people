import React from 'react';
import Navbar from 'app/components/ui/Navbar';
import { MainWrapper, Content } from './elements';

const App = ({ children }) => (
  <MainWrapper>
    <Navbar />
    <Content>
      {children}
    </Content>
  </MainWrapper>
);

export default App;
