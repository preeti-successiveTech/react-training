import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  it('should open modal when "Open Modal" button is clicked', () => {
    render(<Modal />);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('This is a modal')).toBeInTheDocument();
  });

  it('should close modal when "Close" button is clicked', () => {
    render(<Modal />);
    fireEvent.click(screen.getByText('Open Modal')); 
    fireEvent.click(screen.getByText('Close'));      

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});