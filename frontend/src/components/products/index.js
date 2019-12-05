import React, { Component } from 'react';
import { Container, Image, ListViewItem, ContainerBody, ContainerButton, Checkbox, ContainerCheckBox } from './styles'
import Header from '../header';
import Divider from '../divider';
import dualcoffee from '../../assets/images/cafe-duplo.svg';
import { getRequest } from '../../utils/base-axios'

class Products extends Component {

  state = {
    products: []
  }

  loadData(){
    getRequest().get('/api/v1/product')
      .then(res => {
        this.setState({ products: res.data })
      });
  }

  handleContinueButton = () => this.props.history.push('/complements')  

  render(){
    return (
      <Container>
        <ContainerBody>
          <Header />
          <Divider style={{height: "3px", "marginBottom": "27px"}} />
          {this.state.products.map(product => 
            <div>
              <ListViewItem>            
                <Image src={dualcoffee} alt="logo" />
                <div>
                  <span>{product.name}</span>
                  <span>{product.time}</span>
                </div>
                <ContainerCheckBox>
                  <Checkbox checked={false} onChange={(e) => console.log(e)}/>
                </ContainerCheckBox>
              </ListViewItem>
              <Divider style={{height: "1px", "marginBottom": "20px"}} />
            </div>
          )}
        </ContainerBody>
        <ContainerButton>
          <button onClick={this.handleContinueButton}>Continuar</button>
        </ContainerButton>
      </Container>
    )
  }
}

export default Products;