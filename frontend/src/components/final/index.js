import React, { Component } from 'react'
import Header from '../header'
import Divider from '../divider'
import { Container, ContainerBody, Description, ContainerProgress, Progress,
  CouponBox, ContainerButton, ButtonReset, ButtonPrint } from './styles'
import Reset from '../../assets/images/reset.svg'  

class Final extends Component {

  state = {
    time: 0,
    coupon_code: "",
    formatted_date: "0:00 min"
  }

  loadData(){
    const { data } = this.props.location

    if(data === undefined){
      this.props.history.push("/")
      return
    }

    this.setState({ time: data.time, coupon_code: data.coupon_code })

    this.countdown(data.time)
  }

  countdown(time){
    let date = new Date()
    date.setSeconds(date.getSeconds() + time)
    date = date.getTime()

    let x = setInterval(() => {
      const distance = date - new Date().getTime()

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000*60))/1000)

      this.setState({ formatted_date: `${minutes}:${seconds.toString().padStart(2, '0')} min` })

      if(seconds === 0){
        clearInterval(x)
      }

    }, 1000)
  }

  componentDidMount(){
    this.loadData()    
  }

  render(){
    return (
      <Container>
        <ContainerBody>
          <Header/>
          <Divider style={{height: "3px", "marginBottom": "39px"}}/>
          <Description>Pedido realizado com sucesso!</Description>
          <ContainerProgress>
            <Progress>
              <div>
                <span>{this.state.formatted_date}</span>
                <span>tempo restante para ficar pronto</span>
              </div>
            </Progress>
          </ContainerProgress>
          <CouponBox>
            <span>{this.state.coupon_code}</span>
          </CouponBox>
          <ContainerButton>
            <ButtonReset onClick={() => this.props.history.push("/")} ><img src={Reset} alt="reset"/></ButtonReset>
            <ButtonPrint onClick={() => alert(this.state.coupon_code)}>Imprimir cupom</ButtonPrint>
          </ContainerButton>
        </ContainerBody>    
      </Container>
    )
  }
}

export default Final