import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;

  img {
    height: 120px;
    width: 120px;
  }
`

export const RegisterForm = styled.form`
  max-width: 300px;
  margin: 40px auto 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export const RegisterInput = styled.input`
  width: 100%;
  background-color: white;
  padding: 16px 12px;
  height: 45px;
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 3px;
  color: ${(props) => props.theme['gray-900']};
`

export const InputError = styled.p`
  color: red;
  padding: 0 6px;
  font-size: 0.875rem;
`

export const RegisterInputLabel = styled.label`
  color: ${(props) => props.theme['gray-800']};
  margin-left: 10px;
`

export const RegisterButton = styled.button`
  margin-top: 40px;
  align-self: flex-end;
  height: 50px;
  width: 100%;
  padding: 10px;
  border: 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: white;
  font-size: 0.875rem;
  background-color: ${(props) => props.theme.blue};
  transition: background-color 0.1s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['blue-hover']};
  }
`
