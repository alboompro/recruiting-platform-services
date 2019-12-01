import React from 'react';
import coffee from '../../assets/images/coffee.svg';
import { Container, Label, Button, ContainerInputs, Logo } from './styles'

export default () => (
  <Container>
    <Logo src={coffee} alt="logo" />
    <ContainerInputs>
      <Label>
        <span>Nome Completo</span>
        <input type="text"></input>
      </Label>
      <Label>
        <span>E-mail</span>
        <input type="text"></input>
      </Label>
      <Button type="button">Cadastrar</Button>
    </ContainerInputs>
  </Container>
);