import React from 'react';
import { Container, Image, ListViewItem, Divider, ContainerBody, ContainerButton, Checkbox, ContainerCheckBox } from './styles'
import Header from '../header';
import dualcoffee from '../../assets/images/cafe-duplo.svg';

export default () => (
  <Container>
    <ContainerBody>
      <Header />
      <Divider style={{height: "3px", "margin-bottom": "27px"}} />
      <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>
        <ContainerCheckBox>
          <Checkbox checked={false} onChange={(e) => console.log(e)}/>
        </ContainerCheckBox>
      </ListViewItem>
      <Divider style={{height: "1px", "margin-bottom": "20px"}} />
      <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>
      </ListViewItem>
      <Divider style={{height: "1px", "margin-bottom": "20px"}} />
      <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>
      </ListViewItem>
      <Divider style={{height: "1px", "margin-bottom": "20px"}} />
      <ListViewItem>
        <Image src={dualcoffee} alt="logo" />
        <div>
          <span>Café Duplo</span>
          <span>0:45 min</span>
        </div>
      </ListViewItem>
      <Divider style={{height: "1px", "margin-bottom": "20px"}} />
    </ContainerBody>
    <ContainerButton>
      <button>Continuar</button>
    </ContainerButton>
  </Container>
)