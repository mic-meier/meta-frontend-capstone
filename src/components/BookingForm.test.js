import { fireEvent, render, screen } from '@testing-library/react'
import BookingForm from './BookingForm'

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={['17:00']} />)

  const headingElement = screen.getByText('Book Now')
  expect(headingElement).toBeInTheDocument()
})

test('The booking form is submittes', () => {
  const onSubmit = jest.fn((e) => e.preventDefault())
  render(<BookingForm availableTimes={['17:00']} handleSubmit={onSubmit} />)

  const submitButton = screen.getByText('Book Table')
  fireEvent(submitButton, new MouseEvent('click'))
  expect(onSubmit).toHaveBeenCalled()
})
