import React from 'react';
import { Container, Image, ListViewItem, Divider, ContainerBody, ContainerButton } from './styles'
import Header from '../header';
import dualcoffee from '../../assets/images/cafe-duplo.svg';

export default () => (
  <Container>
    <ContainerBody>
      <Header />
      <Divider height="3px" marginbottom="27px" />
      <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>
      </ListViewItem>
      <Divider height="1px" marginbottom="20px" />
      <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>
      </ListViewItem>
      <Divider height="1px" marginbottom="20px" />
      <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>
      </ListViewItem>
      <Divider height="1px" marginbottom="20px" />
      <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>
      </ListViewItem>
      <Divider height="1px" marginbottom="20px" />
    </ContainerBody>
    <ContainerButton>
      <button>Continuar</button>
    </ContainerButton>
  </Container>
)