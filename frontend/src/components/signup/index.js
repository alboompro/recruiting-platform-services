import React, { Component } from 'react';
import coffee from '../../assets/images/coffee.svg';
import { Container, Label, Button, ContainerInputs, Logo } from './styles'
import axios from '../../utils/base-axios'

class Signup extends Component {
  
  state = {
    name: "",
    email: ""
  }

  handleSignup = e => {
    e.preventDefault()
    
    axios.get(`/api/v1/signup?email=${this.state.email}`)
      .then(res => {
         alert(res.status)
      })
  }
  
  render() {
    return (
      <Container>
        <Logo src={coffee} alt="logo" />
        <form onSubmit={this.handleSignup}>
          <ContainerInputs>
            <Label>
              <span>Nome Completo</span>
              <input type="text" onChange={e => this.setState({name: e.target.value})}></input>
            </Label>
            <Label>
              <span>E-mail</span>
              <input type="text" onChange={e => this.setState({email: e.target.value})} ></input>
            </Label>
            <Button type="submit">Cadastrar</Button>
          </ContainerInputs>
        </form>
      </Container>
    );
  }
}

export default Signup;