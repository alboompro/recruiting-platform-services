import { BrandInfoWrapper, BrandWrapper, Divider } from './styles'
import expressoImg from '../../assets/images/coffee.svg'

export function BrandHeader() {
  return (
    <>
      <BrandWrapper>
        <img src={expressoImg} alt="" />
        <BrandInfoWrapper>
          <p>Smart Coffee</p>
          <span>by Alboom</span>
        </BrandInfoWrapper>
      </BrandWrapper>
      <Divider />
    </>
  )
}
