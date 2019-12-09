import React, { Component } from 'react'
import Header from '../header'
import Divider from '../divider'
import {
  Container, ContainerBody, ListViewItem, Image, ContainerCheckBox,
  ComplementsContainer, Description, ContainerButton, Button
} from './styles'
import { getRequest } from '../../utils/base-axios'
import Checked from '../../assets/images/check-ok.svg'
import Unchecked from '../../assets/images/check-empty.svg'

class Complements extends Component {

  state = {
    products: [],
    name: "",
    email: ""
  }

  loadData() {
    const { data } = this.props.location
    if (data === undefined) {
      this.props.history.push('/products')
      return
    }

    this.setState({ name: data.name, email: data.email })

    let products = []

    data.products.map((product) => {
      getRequest().get(`/api/v1/product/${product.id}/ingredients`)
        .then(res => {
          product.ingredients = res.data.slice(0,3)
          products.push(product)   
          this.setState({ products: products })       
        })
    })
  }

  handleBackButton = () => this.props.history.push({ pathname: '/products', data: this.state })

  handleFinalButton(){
    const recipes = []
    let time = 0

    this.state.products.map(product => {
      let selectedProduct = product.ingredients.filter((value) => value.selected === true)
      time += selectedProduct.map(p => p.preparation_time).reduce((a,b) => a+b,0)
      recipes.push({
        recipe_id: product.id,
        ingredients: selectedProduct.map(p => p.id)
      })
    })

    const coupon_code = Math.random().toString(36).substr(2, 6).toUpperCase()

    const data = {
      client_name: this.state.name,
      client_email: this.state.email,
      coupon_code: coupon_code,
      recipes: recipes
    }

    getRequest().post('/api/v1/submit', data)
      .then(res => {
        this.props.history.push('/final', { time: time, coupon_code: coupon_code })
      })   
    
  }

  handleCheckbox = (productIndex, ingredientindex) => {
    const array = this.state.products.slice()
    const ingredients = array[productIndex].ingredients
    ingredients[ingredientindex].selected = !ingredients[ingredientindex].selected
    this.setState({ products: array })
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <Container>
        <ContainerBody>
          <Header />
          <Divider style={{ height: "3px", "marginBottom": "27px" }} />
          <Description>Adicione complementos ao seu pedido</Description>
          {this.state.products.map((product, productIndex) =>
            <div key={productIndex}>
              <ListViewItem>
                <Image src={require(`../../assets/${product.photo}`)} alt="logo" />
                <div>
                  <span>{product.name}</span>
                  <span>0:45 min</span>
                </div>
              </ListViewItem>
              <ComplementsContainer>
              {product.ingredients.map((ingredient, ingredientIndex )=>
                <div key={ingredientIndex}>
                  <ListViewItem>
                    <img src={require(`../../assets/${ingredient.photo}`)} alt="logo" />
                    <div>
                      <span>{ingredient.name}</span>
                      <span>{ingredient.preparation_time}</span>
                    </div>
                    <ContainerCheckBox>
                      <img src={ingredient.selected ? Checked : Unchecked}
                        onClick={() => this.handleCheckbox(productIndex, ingredientIndex)}
                        htmlFor="checkbox" alt="check"/>
                    </ContainerCheckBox>
                  </ListViewItem>
                  <Divider style={{ height: "0px", "marginBottom": "12px" }} />
                </div>
              )}
              </ComplementsContainer>
              <Divider style={{ height: "1px", "marginBottom": "16px" }} />
            </div>
          )}
        </ContainerBody>
        <ContainerButton>
          <Button back onClick={this.handleBackButton}>Voltar</Button>
          <Button submit onClick={() => this.handleFinalButton()}>Finalizar</Button>
        </ContainerButton>
      </Container>
    )
  }
}

export default Complements