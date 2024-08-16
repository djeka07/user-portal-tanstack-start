import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauth/register')({
  component: () => <div>Hello /_unauth/register!</div>
})