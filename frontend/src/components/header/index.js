import React from 'react';
import { Header, Image } from './styles';
import coffee from '../../assets/images/coffee.svg';

export default () => (
  <Header>
    <Image src={coffee} alt="logo" />
    <span>Smart Coffee</span>
  </Header>
)