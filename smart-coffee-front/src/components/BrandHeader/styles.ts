import styled from 'styled-components'

export const BrandWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  img {
    height: 70px;
    width: 70px;
  }
`

export const BrandInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;

  p {
    font-size: 2rem;
    color: ${(props) => props.theme['brown-200']};
    letter-spacing: 2px;
  }

  span {
    font-size: 0.85rem;
    color: ${(props) => props.theme['brown-100']};
  }
`

export const Divider = styled.div`
  width: 100%;
  margin: 10px auto 0;
  border: 1px solid ${(props) => props.theme['gray-200']};
`
