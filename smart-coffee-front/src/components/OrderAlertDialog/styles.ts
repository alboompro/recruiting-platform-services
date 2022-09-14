import styled from 'styled-components'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(AlertDialog.Content)`
  width: 90%;
  border-radius: 6px;
  padding: 20px 30px;
  background: ${(props) => props.theme['gray-100']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const DialogTitle = styled(AlertDialog.Title)`
  font-size: 1.1rem;
  font-weight: ${(props) => props.theme['gray-900']};
  color: black;
`

export const DialogDescription = styled(AlertDialog.Description)`
  width: 100%;
  text-align: justify;
  font-size: 0.9375rem;
  color: ${(props) => props.theme['gray-700']};
`

export const DialogButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`

export const DialogCancelButton = styled(AlertDialog.Cancel)`
  margin: 0;
  border: 0;
  padding: 0 15px;
  height: 35px;
  border-radius: 4px;
  font-weight: bold;
  background-color: #eeedef;
  color: #6f6e77;
`

export const DialogConfirmButton = styled(AlertDialog.Action)`
  margin: 0;
  border: 0;
  padding: 0 15px;
  height: 35px;
  border-radius: 4px;
  font-weight: bold;
  background-color: #ffe5e5;
  color: #cd2b31;
  ::hover {
    outline: red;
  }
`
