import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export function setup(jsx: any) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}