import React, { Component } from 'react';
import { Container, Image, ListViewItem, ContainerBody, ContainerButton, ContainerCheckBox } from './styles'
import Header from '../header';
import Divider from '../divider';
import { getRequest } from '../../utils/base-axios'
import Checked from '../../assets/images/check-ok.svg'
import Unchecked from '../../assets/images/check-empty.svg'

class Products extends Component {

  state = {
    products: []
  }
  
  constructor(props){
    super(props)
    this.loadData()
  }

  loadData(){
    getRequest().get('/api/v1/product')
      .then(res => {
        this.setState({ products: res.data })
      })
      .catch(error => {
        alert(error)
      })
  }

  handleContinueButton = () => this.props.history.push('/complements')  

  handleCheckbox = (index) => {
    const array = this.state.products.slice()
    array[index].selected =  !array[index].selected    
    this.setState({array})    
  }

  render(){
    return (
      <Container>
        <ContainerBody>
          <Header />
          <Divider style={{height: "3px", "marginBottom": "27px"}} />
          {this.state.products.map((product, index) => 
            <div key={index}>
              <ListViewItem>            
                <Image src={require(`../../assets/${product.photo}`)} alt="logo" />
                <div>
                  <span>{product.name}</span>
                </div>
                <ContainerCheckBox>                  
                  <img src={product.selected ? Checked : Unchecked} 
                  onClick={() => this.handleCheckbox(index)} 
                  htmlFor="checkbox" alt="check" htmlFor="checkbox"/>
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