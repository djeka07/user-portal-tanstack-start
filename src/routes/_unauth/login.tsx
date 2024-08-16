import { createFileRoute } from '@tanstack/react-router'
import { LoginView } from '~/auth/views'

export const Route = createFileRoute('/_unauth/login')({
  component: LoginRoute
})

function LoginRoute() {
  return (<LoginView />)
}