import React, { Component } from 'react';
import coffee from '../../assets/images/coffee.svg';
import { Container, Label, Button, ContainerInputs, Logo, Popup } from './styles'
import { getRequest } from '../../utils/base-axios'

class Signup extends Component {
  
  state = {
    name: "",
    email: "",
    erro: ""    
  }

  handleSignup = e => {
    e.preventDefault()
    
    getRequest().get(`/api/v1/signup?email=${this.state.email}`)
      .then(res => {         
        if(res.status === 200){
          this.props.history.push("/products")
        }
      })
      .catch(error => {
        if(error.response.status === 401){
          this.setState({erro: "Desculpe. E-mail já cadastrado!"})
        }
        else{
          this.setState({erro: "Ops! Ocorreu um erro."})
        }
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
            <Popup style={this.state.erro === "" ? {display: "none"} : {display: "flex"}}>
              <span>{this.state.erro}</span>
            </Popup>
            <Button type="submit">Cadastrar</Button>            
          </ContainerInputs>
        </form>
      </Container>      
    );
  }
}

export default Signup;