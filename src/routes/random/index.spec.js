import index from './index.svelte'
import { render, screen } from '@testing-library/svelte'

it('has Sign Up header', () => {
  render(index)
  const header = screen.getByRole('heading', {
    name: 'Random Dog For Your Mood',
  })
  expect(header).toBeTruthy()
})
