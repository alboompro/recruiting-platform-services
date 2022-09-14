import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useNavigate } from 'react-router-dom'
import {
  Content,
  DialogButtonsWrapper,
  DialogCancelButton,
  DialogConfirmButton,
  DialogDescription,
  DialogTitle,
  Overlay,
} from './styles'

export function OrderAlertDialog() {
  const navigate = useNavigate()

  function handleConfirmation() {
    navigate('/success', { replace: true })
  }

  return (
    <AlertDialog.Portal>
      <Overlay />
      <Content>
        <DialogTitle>Você tem certeza disso?</DialogTitle>
        <DialogDescription>
          Você não escolheu nenhum café. Caso queira apreciar algum, clique em
          cancelar. Caso queira apenas o cupom de desconto, clique em prosseguir
        </DialogDescription>
        <DialogButtonsWrapper>
          <DialogCancelButton>Cancelar</DialogCancelButton>
          <DialogConfirmButton onClick={handleConfirmation}>
            Prosseguir
          </DialogConfirmButton>
        </DialogButtonsWrapper>
      </Content>
    </AlertDialog.Portal>
  )
}
