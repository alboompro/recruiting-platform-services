import { Outlet } from 'react-router-dom'
import { LayoutWrapper } from './styles'

export function DefaultLayout() {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  )
}
