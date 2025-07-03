import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('should render initial count as 0', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('0');
  });

  it('should increment the counter when Increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('should decrement the counter when Decrement button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    fireEvent.click(incrementButton); // count = 1
    fireEvent.click(decrementButton); // count = 0

    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });
});